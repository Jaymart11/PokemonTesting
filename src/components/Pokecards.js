import React, { Component } from "react";

export default class Pokecards extends Component {
  render() {
    const { name, type, exp, num } = this.props;
    const threeNum = function (number) {
      if (number >= 100) {
        return number;
      } else if (number <= 99 && number >= 10) {
        return "0" + number;
      } else {
        return "00" + number;
      }
    };
    return (
      <div className="Pokecards">
        <h1 className="poke-name">{name}</h1>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${threeNum(
            num
          )}.png`}
          alt={name}
        />
        <p>{}</p>
        <p>type: {type}</p>
        <p>EXP: {exp}</p>
      </div>
    );
  }
}
