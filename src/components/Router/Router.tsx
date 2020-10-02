import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PokemonPage from '../../pages/Pokemon/PokemonPage';
import * as PageRoutes from '../../constants/Pages';

const Router: React.FC = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path={PageRoutes.POKEMON}>
                <PokemonPage/>
            </Route>
            <Route>
                <Redirect to={PageRoutes.POKEMON}/>
            </Route>
        </Switch>
    </BrowserRouter>;
};

export default Router;