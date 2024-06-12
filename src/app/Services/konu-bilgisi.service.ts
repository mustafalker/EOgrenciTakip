// src/app/services/konu-bilgisi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KonuBilgisi } from '../Model/KonuBilgisi';

@Injectable({
  providedIn: 'root'
})
export class KonuBilgisiService {
  private apiUrl = 'https://localhost:7125/api/KonuBilgisis';  // API URL

  constructor(private http: HttpClient) { }

  // Get all KonuBilgileri
  getKonuBilgileri(): Observable<KonuBilgisi[]> {
    return this.http.get<KonuBilgisi[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a KonuBilgisi by ID
  getKonuBilgisi(id: string): Observable<KonuBilgisi> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<KonuBilgisi>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new KonuBilgisi
  addKonuBilgisi(konuBilgisi: KonuBilgisi): Observable<KonuBilgisi> {
    return this.http.post<KonuBilgisi>(this.apiUrl, konuBilgisi).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing KonuBilgisi
  updateKonuBilgisi(id: string, konuBilgisi: KonuBilgisi): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, konuBilgisi).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a KonuBilgisi
  deleteKonuBilgisi(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Something went wrong; please try again later.');
  }
}
