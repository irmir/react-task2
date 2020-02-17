import React from 'react';

export default class Even extends React.Component {

    render() {
        if (this.props.state % 2 === 0) {
            return <p>{this.props.state}</p>
        } else return <p></p>
    }
}
