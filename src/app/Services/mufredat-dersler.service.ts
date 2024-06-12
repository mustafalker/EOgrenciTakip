import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MufredatDersler } from '../Model/MufredatDersler';

@Injectable({
  providedIn: 'root'
})
export class MufredatDerslerService {
  private apiUrl = 'https://localhost:7125/api/MufredatDerslers'; // API URL'inizi buraya ekleyin

  constructor(private http: HttpClient) { }

  getMufredatDersler(): Observable<MufredatDersler[]> {
    return this.http.get<MufredatDersler[]>(this.apiUrl);
  }

  getMufredatDerslerById(id: string): Observable<MufredatDersler> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<MufredatDersler>(url);
  }

  addMufredatDersler(mufredatDersler: MufredatDersler): Observable<MufredatDersler> {
    return this.http.post<MufredatDersler>(this.apiUrl, mufredatDersler);
  }

  updateMufredatDersler(id: string, mufredatDersler: MufredatDersler): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, mufredatDersler);
  }

  deleteMufredatDersler(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
