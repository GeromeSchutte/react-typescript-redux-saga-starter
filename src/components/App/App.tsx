import React from 'react';
import './App.scss';
import Router from '../Router/Router';
import { Provider } from 'react-redux';
import { store } from '../../store/Store';

const App: React.FC = () => {
    return <Provider store={store}><Router/></Provider>;
};

export default App;