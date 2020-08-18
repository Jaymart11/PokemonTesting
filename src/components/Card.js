import React, { Component } from "react";
import axios from "axios";
import "../Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deckID: "",
      card: [],
      cards: [],
      remaining: "",
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/"
    );
    this.setState({
      deckID: response.data.deck_id,
    });
  }
  clickHandle = async () => {
    const randomdeg1 = Math.floor(Math.random() * 360);
    const randomy = Math.floor(Math.random() * 20);
    const randomx = Math.floor(Math.random() * 20);
    const responseCard = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/`
    );
    this.setState({
      card: responseCard.data.cards,
      remaining: responseCard.data.remaining,
    });

    this.setState((state) => {
      const cards = [
        ...state.cards,
        {
          ...state.card,
          randomdeg: randomdeg1,
          randomx: randomx,
          randomy: randomy,
        },
      ];
      return { cards };
    });
  };

  render() {
    return (
      <div className="Card">
        <div className="all-cards">
          {this.state.cards.map((cards) => (
            <>
              <img
                className="img-card"
                style={{
                  transform: `rotate(${cards.randomdeg}deg) translate(${cards.randomx}px, ${cards.randomy}px)`,
                }}
                src={cards[0].images.png}
                alt={cards[0].code}
              />
            </>
          ))}
        </div>
        {this.state.remaining !== 0 ? (
          <button onClick={this.clickHandle}> Click Me</button>
        ) : null}
      </div>
    );
  }
}
