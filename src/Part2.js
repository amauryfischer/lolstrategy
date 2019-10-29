import React, { Component } from 'react'
import Typist from 'react-typist';
import { Button } from '@material-ui/core';
import {Link } from "react-router-dom";
export default class Part2 extends Component {
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
                        <div>Est-ce que une lettre peut faire ca ?</div>
                    </Typist>
                    {
                        typingDone &&
                        <>
                            <Link style={{textDecoration: "none"}} to="/part3">
                                <Button variant="contained" style={{backgroundColor: "#1e88e5", color: "white"}}>
                                    Ca quoi ?
                                </Button>
                            </Link>
                        </>
                    }

            </div>
        )
    }
}
