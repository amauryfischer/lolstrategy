import React, { Component } from 'react'
import Typist from 'react-typist';
import { Button } from '@material-ui/core';
import {Link } from "react-router-dom";
export default class App extends Component {
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
                        <div>Bonjour Solène</div>
                        <Typist.Delay ms={500} />
                        <div>
                            Comment vas-tu ?
                        </div>
                        <Typist.Delay ms={500} />
                    </Typist>
                    {
                        typingDone &&
                        <>
                            <Link style={{textDecoration: "none"}} to="/part1">
                                <Button variant="contained" style={{backgroundColor: "#1e88e5", color: "white"}}>
                                    Bien merci
                                </Button>
                            </Link>
                            <Link style={{textDecoration: "none"}} to="/part1">
                                <Button variant="contained" style={{backgroundColor: "#1e88e5", color: "white", marginLeft: "2em"}}>
                                    C'est quoi ce truc
                                </Button>
                            </Link>
                        </>
                    }

            </div>
        )
    }
}
