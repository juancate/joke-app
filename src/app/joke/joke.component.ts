import { Joke } from '../joke';
import { Component, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import {
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    @Input('joke') data: Joke;
    @Output() jokeDeleted = new EventEmitter<Joke>();

    constructor() {
        console.log(`new - data is ${this.data}`);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(`ngOnChanges - data is ${this.data}`);
        for (let key in changes) {
            console.log(`
${key} changed.
Current: ${changes[key].currentValue}
Previous: ${changes[key].previousValue}
            `);
        }
    }

    ngOnInit() {
        console.log(`ngOnInit - data is ${this.data}`);
    }

    ngDoCheck() {
        console.log("ngDoCheck");
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
    }

    deleteJoke() {
        this.jokeDeleted.emit(this.data);
    }
}
