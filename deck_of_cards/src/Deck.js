import React, { Component } from 'react';
import Card from './Card';
import './Deck.css';
import axios from 'axios';
const API_BASE = "https://deckofcardsapi.com/api/deck";
const IMG_URL = "https://deckofcardsapi.com/static/img";

class Deck extends Component {
    constructor(props){
        super(props);
        this.state = {deck: null, drawn: []};
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE}/new/shuffle`);
        this.setState({deck: deck.data});
    }
    async getCard() {
        let deck_id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE}/${deck_id}/draw/`;
            // make request using deck_id
            let cardRes = await axios.get(cardUrl);
            if(!cardRes.data.success){
                throw new Error("No card remaining!")
            }
            // set state using new card info from API
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn, 
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.suit} of ${card.value}`
                    }
                ]
            }));
        } catch(err) {
            alert(err);
        }        
    }
    render() {
        const cards = this.state.drawn.map( c => (
            <Card key={c.id} name={c.name} image={c.image}/>
        ));
        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card!</button>
                <div className='deck-card'>{cards}</div>
            </div>
        )
    }
};

export default Deck;