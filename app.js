import React, { Component } from 'React';
import ReactDOM from 'react-dom';

import Timeline from './components/Timeline';

const data = require('./assets/data/data1.json');

class App extends Component {
    render() {
        return (
            <Timeline timelineData={data} />
        )
    }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);