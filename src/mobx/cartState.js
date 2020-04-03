import React from 'react';
import { observable, action, computed } from 'mobx';


class Cart{
    @observable products = getProducts()

    @computed get total(){
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0);
    }

    @action price(i){
        return this.products[i].price * this.products[i].current;
    }

    @action change(i, cnt){
        this.normalize(i, isNaN(cnt) ? this.minmax.min : cnt);
    }

    @action normalize(i, newCnt){
        let cnt = Math.min(Math.max(newCnt, this.minmax.min), this.products[i].rest);
        
        this.products[i].current = cnt;
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

    @observable minmax = {
        min: 1,
        max: 10
    }

    @action remove(i){
        this.products.splice(i, 1);
    }
}

export default new Cart();


function getProducts(){
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1
        }
    ];
}