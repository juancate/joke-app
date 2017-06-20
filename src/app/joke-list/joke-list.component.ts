import { Joke } from '../joke';
import { Component } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {
    jokes: Joke[];

    constructor() {
        this.jokes = [];
    }

    addJoke() {
        let joke = new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)");
        this.jokes.unshift(joke);
    }

    deleteJoke() {
        this.jokes = [];
    }
}
