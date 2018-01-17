import Home from './Home.vue';
import AdminLists from './components/Namespacing.vue';
// import ShoppingList from './components/ShoppingList.vue';
// import SuppliesInventory from './components/SuppliesInventory.vue';







export const routes = [
    {path: '', component: Home },
    
    {path: '/adminLists', component: AdminLists, name: 'adminLists'},
    // {path: '/shoppingList', component: ShoppingList, name: 'shoppingList'},
    // {path: '/suppliesInventory', component: SuppliesInventory, name: 'suppliesInventory'}
    ];

