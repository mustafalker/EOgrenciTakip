// src/app/Services/ogrenci.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ogrenci } from '../Model/Ogrenci';  // Ensure the Ogrenci model is defined in this path
import { Alan } from '../Model/Alan';
import { DersProgrami } from '../Model/DersProgrami';

@Injectable({
  providedIn: 'root'
})
export class OgrenciService {
  private apiUrl = 'https://localhost:7125/api/Ogrencis';
  private alanUrl = 'https://localhost:7125/api/Alans';

  constructor(private http: HttpClient) { }

  // Get all students
  getOgrenciler(): Observable<Ogrenci[]> {
    return this.http.get<Ogrenci[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a single student by ID
  getOgrenci(id: number): Observable<Ogrenci> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Ogrenci>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Add a new student
  addOgrenci(ogrenci: Ogrenci): Observable<Ogrenci> {
    return this.http.post<Ogrenci>(this.apiUrl, ogrenci).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing student
  updateOgrenci(id: number, ogrenci: Ogrenci): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, ogrenci).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a student
  deleteOgrenci(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  // Handle HTTP error
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

  getAlanlar(): Observable<Alan[]> {
    return this.http.get<Alan[]>(this.alanUrl).pipe(
      catchError(this.handleError)
    );
  }
  getDersProgramlari(alanID: string, minHedef: number, maxHedef: number): Observable<DersProgrami[]> {
    const url = `https://localhost:7125/api/DersProgramlari?alanID=${alanID}&minHedef=${minHedef}&maxHedef=${maxHedef}`;
    return this.http.get<DersProgrami[]>(url).pipe(
      catchError(this.handleError)
    );
  }
}
