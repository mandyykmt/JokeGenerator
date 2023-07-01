import { Component } from '@angular/core';
import { Joke } from './models';
import { Observable } from 'rxjs';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  joke$!: Observable<Joke>

  constructor(
    private jokeSvc : JokeService
  ) {}

  press() {
    this.joke$ = this.jokeSvc.tellMeAJoke()
  }
}
