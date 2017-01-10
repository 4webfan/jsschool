import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import About from './pages/about/About';
import Cities from './pages/cities/Cities';
import Comments from './pages/comments/Comments';
import Gallery from './pages/gallery/Slider';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={About} />
        <Route path="/cities" component={Cities} />
        <Route path="/comments" component={Comments} />
        <Route path="/gallery" component={Gallery} />
    </Router>,
    document.getElementById('root')
);