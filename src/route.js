import React from 'react';
import Home from './pages/pageHome';
import ListProducts from './pages/pageProductsList';
import ActionPage from './pages/pagesActionForm';
import NotFound from './pages/NotFound';

const Routes = [
    {
        path:'/',
        exact:true,
        main:()=> <Home />
    },
    {
        path:'/ListProducts',
        exact:true,
        main:() => <ListProducts />
    },
    {
        path:'/ActionPage',
        exact:false,
        main:() =><ActionPage />
    },
    {
        path:'/:id/ActionPage',
        exact:false,
        main:({match}) =><ActionPage match={match} />
    },
    {
        path:'',
        exact:false,
        main:() => <NotFound />
    }
];

export default Routes;