import Home from './Home.vue';
import NameSpacing from './components/Namespacing.vue';


export const routes = [
    {path: '', component: Home },

    {path: '/adminLists', component: NameSpacing, name: 'adminLists'},

    ];

