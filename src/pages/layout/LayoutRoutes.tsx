import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Path } from '../../services/Path';
import Home from '../../app/home/Home';
import Cart from '../../app/cart/Cart';
import { Components } from '../../components';

const LayoutRoutes: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path={Path.home} element={<Home/>}/>
        <Route path={Path.cart} element={<Cart/>}/>
        <Route path={"/pizza/:id"} element={<Components.FullPizza/>}/>

        <Route path='*' element={<Components.NotFound/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes;
