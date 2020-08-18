import React, { Component } from "react";
import Pokecards from "./Pokecards";

export default class Pokedex extends Component {
  static defaultProps = {
    pokeCards: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
      { id: 15, name: "Beedrill", type: "Bug", base_experience: 200 },
      { id: 119, name: "Seaking", type: "Bug", base_experience: 150 },
      { id: 143, name: "Snorlax", type: "Normal", base_experience: 250 },
      { id: 76, name: "Golem", type: "Rock", base_experience: 210 },
    ],
  };
  render() {
    console.log(this.props.pokeCards[0].id);
    const { pokeCards } = this.props;
    const fourPokemon = [];
    const fourPokemon1 = [];
    for (let i = 0; i < 4; i++) {
      const randNum = Math.floor(Math.random() * pokeCards.length);
      const randPokemon = pokeCards[randNum];
      fourPokemon.push(randPokemon);
    }
    const totalExp = fourPokemon.reduce(
      (total, num) => total + num.base_experience,
      0
    );

    for (let i = 0; i < 4; i++) {
      const randNum = Math.floor(Math.random() * pokeCards.length);
      const randPokemon = pokeCards[randNum];
      fourPokemon1.push(randPokemon);
    }
    const totalExp1 = fourPokemon1.reduce(
      (total, num) => total + num.base_experience,
      0
    );
    let isWinner;
    let isWinner1;
    let isWin;
    let isWin1;
    if (totalExp > totalExp1) {
      isWinner = "You Win";
      isWin = "win";
      isWinner1 = "You Lose";
      isWin1 = "lose";
    } else {
      isWinner1 = "You Win";
      isWin1 = "win";
      isWinner = "You Lose";
      isWin = "lose";
    }

    return (
      <div className="Pokedex">
        <h1 className="header">PokeDex</h1>
        <section>
          {pokeCards.map((poke) => {
            return (
              <Pokecards
                key={poke.id}
                num={poke.id}
                name={poke.name}
                type={poke.type}
                exp={poke.base_experience}
              />
            );
          })}
        </section>
        <section className={isWin}>
          {fourPokemon.map((poke) => {
            return (
              <Pokecards
                key={poke.id}
                num={poke.id}
                name={poke.name}
                type={poke.type}
                exp={poke.base_experience}
              />
            );
          })}
          <h1>{totalExp}</h1>
          <h2> {isWinner}</h2>
        </section>

        <section className={isWin1}>
          {fourPokemon1.map((poke) => {
            return (
              <Pokecards
                key={poke.id}
                num={poke.id}
                name={poke.name}
                type={poke.type}
                exp={poke.base_experience}
              />
            );
          })}
          <h1>{totalExp1}</h1>
          <h2>{isWinner1}</h2>
        </section>
      </div>
    );
  }
}
