import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExchangeComponent {
  constructor(private http: HttpClient) { }
  private apiHost = 'api.exchangeratesapi.io';
  private exchangeDate = 'latest';
  private baseCurrency = 'USD';
  exchangeRates: object;
  currencies: object;

  pullExchangeRates() {

    let apiGetUrl: string;

    apiGetUrl = 'https://' + this.apiHost + '/' + this.exchangeDate + '?base=' + this.baseCurrency;
    // console.log(apiGetUrl);
    this.http.get(apiGetUrl).subscribe(data => {
      this.exchangeRates = (data as any).rates;
      this.currencies = Object.keys(this.exchangeRates).sort();
      // console.log(this.exchangeRates);
      // console.log(this.currencies);
    });
  }
}
