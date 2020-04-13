import Input from './../components/input';
import Order from './../components/order';
import Result from './../components/result';
import Post from './../components/posts';
import Products from './../components/allproducts';

let routes = [
    {
        name: 'card',
        url: '/Card',
        component: Input,
        exact: true
    },
    {
        name: 'Order',
        url: '/Order',
        component: Order,
        exact: true
    },
    {
        name: 'Result',
        url: '/Result',
        component: Result,
        exact: true
    },
    {
        name: 'home',
        url: '/',
        component: Products,
        exact: true
    },
    {
        name: 'product',
        url: '/product/:id',
        component: Post,
        exact: true
    }
]

let routesList = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesList[route.name] = route.url;
    }
});

let urlBuilder = function(name, params){
    if(!routesList.hasOwnProperty(name)){
        return null;
    }

    let url = routesList[name]; // news/:id

    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routes;
export { routesList, urlBuilder };