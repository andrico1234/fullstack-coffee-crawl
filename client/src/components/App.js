import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';

import ErrorPage from './error_page/error_page';
import Footer from './footer/footer';
import GenericPage from './generic_page/generic_page';
import LocationDetail from './location_detail/location_detail';
import LocationList from './location_list/location_list';
import NavBar from './nav_bar/nav_bar';
import reducers from '../reducers';

import '../styles/App.css';

class App extends Component {
    render() {
        const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

        const initialise = () => {
            document.getElementsByClassName('shell')[0].style.display = 'none';
        };

        initialise();

        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Router>
                    <div className="App">
                        <NavBar />
                        <Switch>
                            <Route path="/about" component={GenericPage} />
                            <Route path="/location/:id" component={LocationDetail} />
                            <Route exact path="/" component={LocationList} />
                            <Route component={ErrorPage}/>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
