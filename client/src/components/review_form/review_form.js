import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            rating: 0,
            review: ''
        };
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="review-form" action="" method="post" role="form">
                    <fieldset>
                        <label>Name</label>

                        <input onChange={event => this.setState({name: event.target.value})}
                               placeholder="Required" type="text" id="name" name="name"
                               aria-required="true" pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"/>

                        <label >Rating</label>
                        <select onChange={event => this.setState({rating: event.target.value})}
                                name="rating" id="rating">
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>

                        <label>Review</label>
                        <textarea onChange={event => this.setState({review: event.target.value})}
                                  name="review" rows="5"></textarea>
                        <button type="submit" value="Submit">Add My Review</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Form;