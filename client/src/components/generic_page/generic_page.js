import React, {Component} from 'react';

class GenericPage extends Component {
    render() {
        const windowHeight = window.innerHeight - 213;

        return (
            <div className="generic-page-wrapper" style={{minHeight: windowHeight + 'px'}}>
                <h1 className="title">About</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam lorem, lacinia vel gravida eget, tempus ac massa. Integer suscipit lectus non erat porttitor suscipit. Ut porta, quam id lobortis tempus, ex nulla rutrum augue, id finibus mi dolor fermentum quam. Sed eu sollicitudin nisl. Proin urna felis, faucibus ut elit id, ultrices lobortis leo. Phasellus eu ligula et arcu vulputate tincidunt eu vel quam. Curabitur sit amet tellus in quam malesuada dapibus. Nunc id tellus vitae felis varius sodales. Pellentesque sagittis eleifend orci at tristique. Duis hendrerit, mauris vitae commodo rhoncus, risus nisl dictum nunc, ac placerat leo nisl vel erat. Nunc ac dui quis dui semper condimentum et ac lorem. In tincidunt nisi ut dictum volutpat. Vestibulum at vehicula ipsum. Donec posuere purus in diam varius pharetra. Donec dignissim elementum felis, in varius nunc convallis non. Phasellus sollicitudin augue metus, et mattis tellus placerat ac. </p>
                <p className="content">Vestibulum bibendum et ante sed luctus. Mauris mollis felis in urna sagittis, et porttitor metus pretium. Nullam vehicula metus non venenatis viverra. Quisque at tortor tellus. In at metus in nulla faucibus fermentum. Nunc erat dolor, porta in ultrices vel, tristique a risus. Curabitur in interdum mi. In pulvinar ipsum dolor, sed eleifend risus sollicitudin sit amet. Phasellus commodo rhoncus felis. Mauris a purus nunc. Nam quis neque posuere, gravida dolor ac, suscipit velit. Proin pellentesque pellentesque nulla vitae faucibus. Suspendisse bibendum ut ligula ac consequat. Curabitur at velit ultricies, congue mauris eu, feugiat quam. Aenean ipsum augue, congue et rhoncus et, viverra vitae nisi. Morbi mattis, nisi at scelerisque consequat, lectus nulla consequat tellus, ac euismod nibh quam vel nisi.</p>
            </div>
        );
    }
}

export default GenericPage;