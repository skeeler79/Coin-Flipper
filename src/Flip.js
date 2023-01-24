import React, { Component } from 'react';
import Coin from './Coin'

class Flip extends Component {
    constructor(props){
        super(props);
        this.state = {coin: 'heads', clickCount: 0, headsCount: 0, tailsCount: 0};
        this.goFlip = this.goFlip.bind(this)
    }
    
    goFlip(){
        
        let flip = Math.floor(Math.random() * 2);
        console.log(flip)
        if (flip === 0){
            this.setState({coin: 'heads', headsCount: this.state.headsCount +1 })
            }else{
                this.setState({coin: 'tail', tailsCount: this.state.tailsCount + 1})
            }
            this.setState({clickCount: this.state.clickCount + 1})
        }
    
    render (){

        return (
            <div className='Flip'>
                <Coin face={this.state.coin} />
                <button onClick={this.goFlip}>Flip a Coin!</button>
                <p>Total Clicks: {this.state.clickCount}</p>
                <p>Heads Count: {this.state.headsCount}</p>
                <p>Tails Count: {this.state.tailsCount}</p>

            </div>
        )
    }


}

export default Flip;
