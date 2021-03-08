import React from 'react';
import Post from './Post';

export default class app extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World!</h1>
                <Post title="Learning ReactJS with RocketSeat" />
                <Post title="ReactJS is great" />
                <Post />
            </div>
        );
    }
}