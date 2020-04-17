import cartProducts from './cartProducts';
import cartState from './cartState';
import orderState from './orderState';

class Store{
    constructor(){
        this.cartState = new cartState(this);
        this.cartProducts = new cartProducts(this);
        this.orderState = new orderState(this);
    }    
}

export default new Store();