// src/app/Services/alan.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Alan } from '../Model/Alan';  // Ensure the Alan model is defined in this path

@Injectable({
  providedIn: 'root'
})
export class AlanService {
  private apiUrl = 'https://localhost:7125/api/Alans';

  constructor(private http: HttpClient) { }

  // Get all alanlar
  getAlanlar(): Observable<Alan[]> {
    return this.http.get<Alan[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a single alan by ID
  getAlan(id: string): Observable<Alan> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Alan>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Add a new alan
  addAlan(alan: Alan): Observable<Alan> {
    return this.http.post<Alan>(this.apiUrl, alan).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing alan
  updateAlan(id: string, alan: Alan): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, alan).pipe(
      catchError(this.handleError)
    );
  }

  // Delete an alan
  deleteAlan(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Something went wrong; please try again later.';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
