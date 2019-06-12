import React from 'react';
import Home from './pages/pageHome';
import ListProducts from './pages/pageProductsList';
import ActionPage from './pages/pagesActionForm';
import NotFound from './pages/NotFound';
import WorkCompleted from './pages/WorkCompleted';

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
        main:({history}) =><ActionPage history ={history}/>
    },
    {
        path:'/:id/ActionPage',
        exact:false,
        main:({match,history}) =><ActionPage match={match} history ={history}/>
    },
    {
        path:'/workCompleted',
        exact:false,
        main:() => <WorkCompleted />
    },
    {
        path:'',
        exact:false,
        main:() => <NotFound />
    }
];

export default Routes;