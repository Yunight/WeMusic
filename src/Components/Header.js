import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (
            <div className="center">
                <div className="centerImg">
                    <h1 className={"bigTitle"}>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Header;
