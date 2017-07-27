import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import Amber from './components/amber.jsx';
 
document.addEventListener('DOMContentLoaded', function(){
    
    class App extends React.Component {
        render () {
            return <Amber />;
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
 