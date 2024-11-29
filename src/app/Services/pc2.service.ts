import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class PC2Service 
{
  private apiUrl = 'https://rickandmortyapi.com/api/character'
  constructor(private http: HttpClient) {}
  getCharacters(page:number =1, name: string=''): Observable<ApiResponse>
  {
    return this.http.get<ApiResponse>(`${this.apiUrl}?page=${page}&name=${name}`)
  }
}
