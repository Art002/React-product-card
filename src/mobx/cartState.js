import React from 'react';
import { observable, action, computed } from 'mobx';

export default class Cart{
    constructor(store){
        this.store = store;
    }
    @observable products = getProducts();

    @action price(i){
        return this.products[i].price * this.products[i].current;
    }

    @action pushToCart(card){
        let product = this.store.cartProducts.products.find(item => item.id == card.id);
        let productIndex = this.store.cartProducts.products.findIndex(item => item.id == card.id);
        if(!product){
            this.store.cartProducts.products.push(card);
        }else {
            this.store.cartProducts.products.splice(productIndex, 1);
        }
    }

}

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