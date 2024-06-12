import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DersBilgisi } from '../Model/DersBilgisi';


@Injectable({
  providedIn: 'root'
})
export class DersBilgisiService {
  private apiUrl = 'https://localhost:7125/api/DersBilgisis'; 

  constructor(private http: HttpClient) { }

  // Get all DersBilgileri
  getDersBilgileri(): Observable<DersBilgisi[]> {
    return this.http.get<DersBilgisi[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a DersBilgisi by ID
  getDersBilgisi(id: string): Observable<DersBilgisi> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<DersBilgisi>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new DersBilgisi
  addDersBilgisi(dersBilgisi: DersBilgisi): Observable<DersBilgisi> {
    return this.http.post<DersBilgisi>(this.apiUrl, dersBilgisi).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing DersBilgisi
  updateDersBilgisi(id: string, dersBilgisi: DersBilgisi): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, dersBilgisi).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a DersBilgisi
  deleteDersBilgisi(id: string): Observable<any> {
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
