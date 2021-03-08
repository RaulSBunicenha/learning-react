import React from 'react';

export default class Comment extends React.Component {
    render () {
        return (
            <p>Comment: { this.props.text }</p>
        )
    }
}