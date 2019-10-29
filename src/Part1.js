import React, { Component } from 'react'
import Typist from 'react-typist';
import { Button } from '@material-ui/core';
import {Link } from "react-router-dom";
export default class Part1 extends Component {
    state = {
        typingDone: false
    }
    setTypingDone = () => {
        this.setState({typingDone: true})
    }
    
    render() {
        const { typingDone } = this.state
        return (
            <div style={{position: "absolute", top: "50%", right: "50%"}}>
                    <Typist onTypingDone={this.setTypingDone}>
                        <div>Ce "truc" est un programme informatique</div>
                        <Typist.Delay ms={500} />
                        <div>
                            Il parait qu'en 2019 il faut envoyer des lettres
                        </div>
                        <div>
                            des lettres, non mais quel blague 😁😁😁😁😁😁😁😁😁😁😁😁😁😁
                        </div>
                        <Typist.Delay ms={500} />
                    </Typist>
                    {
                        typingDone &&
                        <>
                            <Link style={{textDecoration: "none"}} to="/part2">
                                <Button variant="contained" style={{backgroundColor: "#1e88e5", color: "white"}}>
                                    Hahaha
                                </Button>
                            </Link>
                        </>
                    }

            </div>
        )
    }
}
