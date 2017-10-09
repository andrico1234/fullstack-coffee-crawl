import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ReactModal from 'react-modal';

import MobileNavBarModal from './mobile_nav_bar_modal';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    };

    closeModal() {
        if (this.state.showModal) {
            const navModal = document.getElementsByClassName('navModal')[0];
            navModal.className += ' move-out ';
            navModal.addEventListener('animationend', () => {
                this.setState({showModal: false})
            });
        }
    }

    openModal() {
        this.setState({showModal: true});
    }

    render() {
        window.addEventListener('resize', this.closeModal);

        return (
            <nav>
                <h3 className="nav-header">
                    <Link className="nav-logo" to="/">Cafe Crawl</Link>
                </h3>
                <ul className="nav-list">
                    <li className="nav-listitem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-listitem">
                        <a href="http://andri.co">Other Stuff</a>
                    </li>
                    <li className="nav-listitem">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <div className="nav-burger-container" onClick={this.openModal} data-toggle="collapse" data-target=".navbar-main">
                    <img className="nav-burger" alt="burger menu" src="/images/burger-menu.svg"/>
                </div>
                <ReactModal className="navModal move-in" overlayClassName="navModal-overlay" isOpen={this.state.showModal} onRequestClose={this.closeModal} contentLabel="Nav Modal">
                    <MobileNavBarModal close={this.closeModal}/> </ReactModal>
            </nav>
        );
    }
};

export default NavBar;