import Home from './pages/Home'
import Product from './pages/Product.vue'
import MyProductList from "./pages/MyProductList.vue";
export default [
    {
        path : '',
        component : Home,
        name : 'home'
    },
    {
        path : '/product/:id',
        component : Product,
        name : 'product',
        props : true
    },
    {
        path : '/product',
        component : MyProductList,
        name : 'products',
        props : true
    }
]
