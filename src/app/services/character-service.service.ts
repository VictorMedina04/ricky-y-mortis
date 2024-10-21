import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters, CharactersResponse } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private http:HttpClient) { }

  getCharacters() : Observable<CharactersResponse>{
    return this.http.get<CharactersResponse>('https://rickandmortyapi.com/api/character');
  }


}
