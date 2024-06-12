import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MufredatKonular } from '../Model/MufredatKonular';

@Injectable({
  providedIn: 'root'
})
export class MufredatKonularService {
  private apiUrl = 'https://localhost:7125/api/MufredatKonulars'; // API URL'inizi buraya ekleyin

  constructor(private http: HttpClient) { }

  getMufredatKonular(): Observable<MufredatKonular[]> {
    return this.http.get<MufredatKonular[]>(this.apiUrl);
  }

  getMufredatKonularById(id: string): Observable<MufredatKonular> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<MufredatKonular>(url);
  }

  addMufredatKonular(mufredatKonular: MufredatKonular): Observable<MufredatKonular> {
    return this.http.post<MufredatKonular>(this.apiUrl, mufredatKonular);
  }

  updateMufredatKonular(id: string, mufredatKonular: MufredatKonular): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, mufredatKonular);
  }

  deleteMufredatKonular(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
