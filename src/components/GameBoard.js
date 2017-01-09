import React, { Component } from 'react';
import '../styles/gameboard.css';

export default class GameBoard extends Component{
    render(){
        return(
            <main>
                <div className="game">
                    <div className="game-row">
                        <div className="box init" id="1">
                            <div className="cross"></div>
                        </div>
                        <div className="box" id="4"></div>
                        <div className="box" id="7"></div>
                    </div>
                    <div className="game-row">
                        <div className="box" id="2">
                        </div>
                        <div className="box" id="5">
                            <div className="title-select">Select a tile</div>
                        </div>
                        <div className="box" id="8"></div>
                    </div>
                    <div className="game-row">
                        <div className="box" id="3">
                        </div>
                        <div className="box" id="6">
                        </div>
                        <div className="box init" id="9">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
