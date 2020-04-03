import React from 'react';
import { observable, action, computed } from 'mobx';

class Order{
    
    @observable persons = getData();
    
    @observable button = true;

    @action onChange(person, value){
        this.patternTest(person, value);
        this.errorMessage(person);
        this.persons[person].value = value;
    }

    @action patternTest(person, value){
        (this.persons[person].pattern.test(value)) ? 
        this.persons[person].isValid = true : 
        this.persons[person].isValid = false;
    }

    @action errorMessage(person){
        (!this.persons[person].isValid) ?
        this.persons[person].showMsg = this.persons[person].errMessage :
        this.persons[person].showMsg = '';
    }

    @computed get disabledButton(){
        return Object.values(this.persons).every(field => field.isValid);
    }

    @observable show = false;

    @action handleShow(){
        this.show = true;
    }

    @action handleClose(){
        this.show = false;
    }
    
}

export default new Order();

function getData(){
    return {
        name: {
            value: '',
            label: 'Введите имя',
            id: 1,
            pattern: /^[a-zA-Z\s]+$/,
            isValid: null,
            errMessage: 'Введите только буквы',
            showMsg: '',
        },
        phone: {
            value: '',
            label: 'Введите телефон',
            id: 2,
            pattern: /^[0-9]+$/,
            isValid: null,
            errMessage: 'Введите только цифры',
            showMsg: '',
        },
        email: {
            value: '',
            label: 'Введите адресс почты',
            id: 3,
            pattern: /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/,
            isValid: null,
            errMessage: 'Введите корректный адресс почты',
            showMsg: '',
        }
    };
}