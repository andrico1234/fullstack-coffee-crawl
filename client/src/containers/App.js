import React, {Component} from 'react';

import Footer from '../components/footer/footer';
import LocationList from '../components/location_list/location_list';
import NavBar from '../components/nav_bar/nav_bar';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <LocationList />
                <Footer />
            </div>
        );
    }
}

export default App;
