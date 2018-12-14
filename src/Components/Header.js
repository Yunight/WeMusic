import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (
            <div className="center">
                <div className="centerImg ">
                    <div className="centercolor"/>
                    <h1 className="bigTitle"><b>{this.props.title}</b></h1>
                </div>
            </div>
        )
    }
}

export default Header;
