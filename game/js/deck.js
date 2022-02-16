import { Card } from "./card.js";
export class Deck {
  cards = [];

  constructor() {
    const suits = ["heart", "diamond", "spade", "club"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    suits.forEach((suit) => {
      values.forEach((value) => {
        this.cards.push(new Card(value, suit));
      });
    });
    this.shuffle();
  }

  shuffle() {
    const shuffledCards = [];
    while (this.cards.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      shuffledCards.push(this.cards.splice(randomIndex, 1)[0]);
    }
    this.cards = shuffledCards;

    this.cards.forEach((card) => {
      card.display();
    });
  }
}

const answers = ['yes', 'no', 'maybe', 'idk', 'try again', 'no idea'];
const random = Math.floor(Math.random() * answers.length);
console.log(answers[random]);