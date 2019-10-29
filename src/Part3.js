import React, { Component } from 'react'
import {Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import "./Part3.scss"
import { Input } from '@material-ui/core';
export default class Part3 extends Component {
    state = {
        typingDone: false,
        value: ""
    }

    setValue = (event) => {
        this.setState({value: event.target.value})
        if (event.target.value === "j'aime pas les champignons") {
            window.location.href = "/partsecret"
        }
    }

    setTypingDone = () => {
        this.setState({typingDone: true})
    }
    
    render() {
        const { typingDone, value } = this.state
        return (
            <>
            <div className="black"  style={{position: "absolute", width: window.innerWidth, height: window.innerHeight}}></div>
            <div style={{position: "absolute", top: "50%", right: "50%", display: "none"}}>
                <ReactPlayer url='https://www.youtube.com/watch?v=ujGMKIVNHyA' playing onEnded={this.setTypingDone} />

            </div>
            <div class="pyro">
            <div class="before"></div>
            <div class="after"></div>
          </div>
          <h1 style={{color: "white", position: "absolute", top: "40%", right: "40%"}}>Joyeux Anniversaire ma Soso</h1>
          {typingDone && 
          <div>
              <Input style={{backgroundColor: "white"}} value={value} onChange={this.setValue}/>
          </div>}
          </>
        )
    }
}
