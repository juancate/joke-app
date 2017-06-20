import { Joke } from '../joke';
import { JokeComponent } from '../joke/joke.component';
import { Component, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements AfterViewInit {
    jokes: Joke[];

    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
    @ViewChild("header") headerEl: ElementRef;

    constructor() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
            new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
        ];
        console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
    }

    addJoke(joke: Joke) {
        this.jokes.unshift(joke);
    }

    deleteJoke(joke) {
        let indexToDelete = this.jokes.indexOf(joke);
        if (indexToDelete !== -1) {
            this.jokes.splice(indexToDelete, 1);
        }
    }

    ngAfterViewInit() {
        console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
        let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
        console.log(jokes);

        console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);

        this.headerEl.nativeElement.textContent = "Best Joke Machine";
    }
}
