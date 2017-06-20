import { Joke } from '../joke';
import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeFormComponent {
    @Output() jokeCreated = new EventEmitter<Joke>();

    createJoke(setup: string, punchline: string) {
        let joke = new Joke(setup, punchline);
        this.jokeCreated.emit(joke);
    }
}
