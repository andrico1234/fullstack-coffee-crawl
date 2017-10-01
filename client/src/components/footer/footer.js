import React, {Component} from 'react';

import iconGh from '../../images/icon-github.svg';
import iconLi from '../../images/icon-linkedin.svg';
import iconMl from '../../images/icon-mail.svg';
import iconTw from '../../images/icon-twitter2.svg';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <p>&copy; Andrico Karoulla 2017</p>
                    <div className="logo-container">
                        <a href="https://github.com/andrico1234"> <img className="logo" src={iconGh} alt="github logo"/> </a>
                        <a href="https://www.linkedin.com/in/andrico-karoulla"> <img className="logo" src={iconLi} alt="linkedIn logo"/> </a>
                        <a href="mailto:andrico1234@yahoo.co.uk?Subject=Enquiry"> <img className="logo" src={iconMl} alt="mail logo"/> </a>
                        <a href="https://twitter.com/andricokaroulla"> <img className="logo" src={iconTw} alt="twitter logo"/> </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;