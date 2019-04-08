import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Offer } from './offer.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

    selectedOffer: Offer = {
        period: '',
        description: '',
        status: '',
        filename: '',
        published: '',
        author: null
    };

    
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  
  getProjectOffers(id: string) {
    return this.http.get(environment.apiBaseUrl + '/projects/'+ id +'/offers');
  }

  


  
}

