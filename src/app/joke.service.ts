import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Joke } from "./models";
import { Observable } from "rxjs";

@Injectable()
export class JokeService {

    constructor (
        private http : HttpClient
    ) {}

    tellMeAJoke(): Observable<Joke> {
        return this.http.get<Joke>('https://official-joke-api.appspot.com/jokes/random')
    }
}