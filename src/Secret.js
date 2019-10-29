import React, { Component } from 'react'
import Typist from 'react-typist';
import { Button } from '@material-ui/core';
import {Link } from "react-router-dom";
export default class Secret extends Component {
    state = {
        typingDone: false
    }
    
    render() {
        return (
            <div>
                    <Typist>
                        <div>Petit message un petit peu plus personnel :)</div>
                        <div>On a pas énormément l'occasion de se voir vu la distance à laquelle on se trouve l'un de l'autre</div>
                        <div>Mais je tenais à te dire à "haute voix" que je pense quand même trés fort à toi</div>
                        <div>Entre ma boite, mon entreprise etc.. le plus important reste quand même la famille :)</div>
                        <div>On prendra le temps de faire pas mal de trucs ensemble quand tu seras un peu plus souvent en France</div>
                        <div>En attendant j'ai trés hâte de te revoir pour Noël</div>
                        <div>Côté études t'en fait pas, ya des hauts et ya des bas, mais t'es pas bête je me fait aucun soucis sur le fait que tu vas t'en sortir</div>
                        <div>Suis ce que ton coeur te dis de faire, et écoute pas trop ceux que te disent de faire les autres parce qu'ils t'y voient bien :)</div>
                        <div>Quoi que tu choisisses de toute façon je suis à fond avec toi, et si t'as besoin d'une quelconque aide hésite surtout pas, un grand frère c'est fait pour ca^^</div>
                        <div>Pour la petite anecdote Dad m'a dis que ca serait bien que je t'écrives une lettre.</div>
                        <div>J'aime pas les lettres du coup j'ai fait quelque chose qui me correspond mieux^^</div>
                        <div>J'espere que tu auras apprecié :D</div>
                        <div>Je te souhaite un excellent anniversaire, et j'ai super hâte de te voir</div>
                        <div>Pleins de bisous 😍😍😍</div>
                    </Typist>
            </div>
        )
    }
}
