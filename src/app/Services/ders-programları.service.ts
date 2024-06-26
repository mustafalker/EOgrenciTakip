import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DersProgrami } from '../Model/DersProgrami';

@Injectable({
  providedIn: 'root'
})
export class DersProgramlariService {
  private apiUrl = 'https://localhost:7125/api/DersProgramis'; 

  constructor(private http: HttpClient) { }

  // Get all DersProgramlari
  getDersProgramlari(): Observable<DersProgrami[]> {
    return this.http.get<DersProgrami[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a DersProgrami by ID
  getDersProgrami(id: string): Observable<DersProgrami> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<DersProgrami>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new DersProgrami
  addDersProgrami(dersProgrami: DersProgrami): Observable<DersProgrami> {
    return this.http.post<DersProgrami>(this.apiUrl, dersProgrami).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing DersProgrami
  updateDersProgrami(id: string, dersProgrami: DersProgrami): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, dersProgrami).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a DersProgrami
  deleteDersProgrami(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  searchDersProgramlari(alanID: string, minHedef: number, maxHedef: number): Observable<DersProgrami[]> {
    const url = `${this.apiUrl}/ara?alanID=${alanID}&minHedef=${minHedef}&maxHedef=${maxHedef}`;
    return this.http.get<DersProgrami[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Something went wrong; please try again later.');
  }
}
