import React, { Component } from 'react';
import '../styles/header.css';

export default class Header extends Component{
    render(){
        return(
            <header>
                <div className="row">
                    <div className="small-12 columns">
                        <h3>Tic Tac Toe</h3>
                        <hr/>
                    </div>
                </div>
            </header>
        )
    }
}
