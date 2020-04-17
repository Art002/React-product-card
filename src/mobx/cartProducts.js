import React from 'react';
import { observable, action, computed } from 'mobx';

export default class ProductsInCart {
    constructor(store){
        this.store = store;
    }
    @observable products = []

    @action price(i){
        return this.products[i].price * this.products[i].current;
    }
    @computed get total(){
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0);
    }
    @action normalize(i, newCnt){
        let cnt = Math.min(Math.max(newCnt, 1), this.products[i].rest);
        
        this.products[i].current = cnt;
    }
    @action change(i, cnt){
        this.normalize(i, isNaN(cnt) ? 1 : cnt);
    }
    @action add(i){
        this.products[i].current++;
        let cnt = this.products[i].current;        
        this.normalize(i, cnt);
    }
    @action minus(i){
        this.products[i].current--;
        let cnt = this.products[i].current;  
        this.normalize(i, cnt);
    }
    @action remove(i){
        this.products.splice(i, 1);
    }

}

