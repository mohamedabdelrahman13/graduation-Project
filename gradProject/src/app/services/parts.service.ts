import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../environments/api-url';
import { Observable } from 'rxjs';
import { spareParts } from '../models/spareParts.model';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private http:HttpClient) { }

  getAllParts(): Observable<spareParts[]>{
    return this.http.get<spareParts[]>(`${ApiUrl.ApiUrl}/api/SpareParts/ListAllSpareParts`);
  }
}
