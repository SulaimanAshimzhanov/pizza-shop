import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Path } from '../services/Path';
import LayoutRoutes from '../pages/layout/LayoutRoutes';


const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={Path.layout} element={<LayoutRoutes/>}/>
      </Switch>
    </React.Fragment>
  )
}

export default Routes;
