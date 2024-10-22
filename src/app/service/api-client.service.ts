import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseWord } from '../model/responseWord.model';
import { GuessWord } from '../model/guessWord.model';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private httpClient = inject(HttpClient);

  public getPokemonValue(guess: GuessWord): Observable<ResponseWord> {
    return this.httpClient.get<ResponseWord>(
      `https://liecaratg-dojo-72-mk9y8tfztets.deno.dev/?word=${guess.value}`,
    );
  }
}