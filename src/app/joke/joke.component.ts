import { Joke } from '../joke';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
    @Input('joke') data: Joke;
    @Output() jokeDeleted = new EventEmitter<Joke>();

    deleteJoke() {
        this.jokeDeleted.emit(this.data);
    }
}
