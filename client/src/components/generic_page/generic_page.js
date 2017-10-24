import React, {Component} from 'react';

class GenericPage extends Component {
    render() {
        const windowHeight = window.innerHeight - 213;

        return (
            <div className="generic-page-wrapper" style={{minHeight: windowHeight + 'px'}}>
                <h1 className="title">About</h1>
                <h2 className="subtitle">Lorem ipsum dolor sit amet, </h2>
                <p className="content">Vestibulum bibendum et ante sed luctus. Mauris mollis felis in urna sagittis, et porttitor metus pretium nunc convallis non. Phasellus sollicitudin augue metus, et mattis tellus placerat ac. Nullam vehicula metus non venenatis viverra. Quisque at tortor tellus. In at metus in nulla faucibus fermentum. Nunc erat dolor, porta in ultrices vel, tristique a risus. Curabitur in interdum mi. In pulvinar ipsum dolor, sed eleifend risus sollicitudin sit amet. Phasellus commodo rhoncus felis. Mauris a purus nunc. Nam quis neque posuere, gravida dolor ac, suscipit velit. Proin pellentesque pellentesque nulla vitae faucibus. Suspendisse bibendum ut ligula ac consequat. Curabitur at velit ultricies, congue mauris eu, feugiat quam. Aenean ipsum augue, congue et rhoncus et, viverra vitae nisi. Morbi mattis, nisi at scelerisque consequat, lectus nulla consequat tellus, ac euismod nibh quam vel nisi.</p>
            </div>
        );
    }
}

export default GenericPage;