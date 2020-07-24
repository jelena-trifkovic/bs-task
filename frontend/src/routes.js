import React from 'react';
import { Route } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import BoardsScreen from './components/BoardsScreen';
import LoginScreen from './components/LoginScreen';

const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/board/' component={GameScreen}/>
            <Route exact path='/boards/' component={BoardsScreen}/>
            <Route exact path='/create-user/' component={LoginScreen}/>
        </div>
    );
}

export default BaseRouter;