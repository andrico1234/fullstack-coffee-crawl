import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ErrorPage from '../components/error_page/error_page';
import Footer from '../components/footer/footer';
import GenericPage from '../components/generic_page/generic_page';
import LocationDetail from '../components/location_detail/location_detail';
import LocationList from '../components/location_list/location_list';
import NavBar from '../components/nav_bar/nav_bar';
import Review from '../components/review_form/review';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <Route path="/about" component={GenericPage} />
                    <Route path="/error" component={ErrorPage} />
                    <Route path ="/location/review/new" component={Review} />
                    <Route exact path="/location" component={LocationDetail} />
                    <Route exact path="/" component={LocationList} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
