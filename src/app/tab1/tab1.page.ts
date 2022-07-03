import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  deck = [
    // Hearts
    {
      value: 'A',
      suit: 'hearts',
      count: '-1',
    },
    {
      value: '2',
      suit: 'hearts',
      count: '+1',
    },
    {
      value: '3',
      suit: 'hearts',
      count: '+1',
    },
    {
      value: '4',
      suit: 'hearts',
      count: '+1',
    },
    {
      value: '5',
      suit: 'hearts',
      count: '+1',
    },
    {
      value: '6',
      suit: 'hearts',
      count: '+1',
    },
    {
      value: '7',
      suit: 'hearts',
      count: '0',
    },
    {
      value: '8',
      suit: 'hearts',
      count: '0',
    },
    {
      value: '9',
      suit: 'hearts',
      count: '0',
    },
    {
      value: '10',
      suit: 'hearts',
      count: '-1',
    },
    {
      value: 'J',
      suit: 'hearts',
      count: '-1',
    },
    {
      value: 'Q',
      suit: 'hearts',
      count: '-1',
    },
    {
      value: 'K',
      suit: 'hearts',
      count: '-1',
    },
    // Diamonds
    {
      value: 'A',

      suit: 'diamonds',
      count: '-1',
    },
    {
      value: '2',
      suit: 'diamonds',
      count: '+1',
    },
    {
      value: '3',
      suit: 'diamonds',
      count: '+1',
    },
    {
      value: '4',
      suit: 'diamonds',
      count: '+1',
    },
    {
      value: '5',
      suit: 'diamonds',
      count: '+1',
    },
    {
      value: '6',
      suit: 'diamonds',
      count: '+1',
    },
    {
      value: '7',
      suit: 'diamonds',
      count: '0',
    },
    {
      value: '8',
      suit: 'diamonds',
      count: '0',
    },
    {
      value: '9',
      suit: 'diamonds',
      count: '0',
    },
    {
      value: '10',
      suit: 'diamonds',
      count: '-1',
    },
    {
      value: 'J',
      suit: 'diamonds',
      count: '-1',
    },
    {
      value: 'Q',
      suit: 'diamonds',
      count: '-1',
    },
    {
      value: 'K',
      suit: 'diamonds',
      count: '-1',
    },
    // Clubs
    {
      value: 'A',

      suit: 'clubs',
      count: '-1',
    },
    {
      value: '2',
      suit: 'clubs',
      count: '+1',
    },
    {
      value: '3',
      suit: 'clubs',
      count: '+1',
    },
    {
      value: '4',
      suit: 'clubs',
      count: '+1',
    },
    {
      value: '5',
      suit: 'clubs',
      count: '+1',
    },
    {
      value: '6',
      suit: 'clubs',
      count: '+1',
    },
    {
      value: '7',
      suit: 'clubs',
      count: '0',
    },
    {
      value: '8',
      suit: 'clubs',
      count: '0',
    },
    {
      value: '9',
      suit: 'clubs',
      count: '0',
    },
    {
      value: '10',
      suit: 'clubs',
      count: '-1',
    },
    {
      value: 'J',
      suit: 'clubs',
      count: '-1',
    },
    {
      value: 'Q',
      suit: 'clubs',
      count: '-1',
    },
    {
      value: 'K',
      suit: 'clubs',
      count: '-1',
    },
    // Spades
    {
      value: 'A',
      suit: 'spades',
      count: '-1',
    },
    {
      value: '2',
      suit: 'spades',
      count: '+1'
    },
    {
      value: '3',
      suit: 'spades',
      count: '+1',
    },
    {
      value: '4',
      suit: 'spades',
      count: '+1',
    },
    {
      value: '5',
      suit: 'spades',
      count: '+1',
    },
    {
      value: '6',
      suit: 'spades',
      count: '+1',
    },
    {
      value: '7',
      suit: 'spades',
      count: '0',
    },
    {
      value: '8',
      suit: 'spades',
      count: '0',
    },
    {
      value: '9',
      suit: 'spades',
      count: '0',
    },
    {
      value: '10',
      suit: 'spades',
      count: '-1',
    },
    {
      value: 'J',
      suit: 'spades',
      count: '-1',
    },
    {
      value: 'Q',
      suit: 'spades',
      count: '-1',
    },
    {
      value: 'K',
      suit: 'spades',
      count: '-1',
    },
  ];

  cardsPerMinute = 60;
  delay = 1000;
  counting = false;
  currentCard;
  runningCount = 0;
  usersRunningCount = 0;
  time = 0;

  async start() {
    this.shuffleDeck();
    this.startTimer();
    for (let card of this.deck) {
      this.currentCard = card;
      this.updateRunningCount(card);
      await this.timer(this.delay);
      if (!this.counting) {
        break;
      }
    }
  }

  pause() {
    this.counting = false;
  }

  stop() {
    this.counting = false;
    this,this.resetValues();
  }

  private resetValues() {
    this.runningCount = 0;
    this.usersRunningCount = 0;
  }

  private timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  private shuffleDeck() {
    this.deck.sort(() => Math.random() - 0.5);
  }

  private startTimer() {
    this.counting = true;
    const start = Date.now();
    setInterval(() => {
        const delta = Date.now() - start;
        this.time = Math.floor(delta / 1000);
    }, 1000);
  }

  private updateRunningCount(card) {
    card.count === '-1' && this.runningCount--;
    card.count === '+1' && this.runningCount++;
  }

  minus() {
    this.usersRunningCount--;
  }

  plus() {
    this.usersRunningCount++;
  }
}
