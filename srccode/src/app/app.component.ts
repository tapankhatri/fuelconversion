import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeComponent } from './exchange/exchange.component';
import { FormsModule } from '@angular/forms';

declare var chi: any;
@Component({
  selector: 'fuelconversion',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Fuel Price Converter';
  exchangeClass = new ExchangeComponent(this.http);
  srcCurrency = '';
  dstCurrency = '';
  srcPrice: number;
  dstPrice: number;
  srcVolume = '';
  dstVolume = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    chi.floatingLabel(document.getElementById('price_input_label'));
    chi.floatingLabel(document.getElementById('currency_button_label'));
    chi.floatingLabel(document.getElementById('volume_button_label'));
    chi.floatingLabel(document.getElementById('price_output_label'));
    chi.floatingLabel(document.getElementById('currency_output_button_label'));
    chi.floatingLabel(document.getElementById('volume_output_button_label'));

    this.exchangeClass.pullExchangeRates();

  }

  calcPrice() {
    let volumeConverter = 1;
    let currencyConverter: number;

    if (this.srcCurrency && this.srcPrice && this.srcVolume && this.dstCurrency && this.dstVolume) {
      if (this.srcVolume === 'Gallons' && this.dstVolume === 'Liters') {
        volumeConverter = 3.78541;
      }

      if (this.srcVolume === 'Liters' && this.dstVolume === 'Gallons') {
        volumeConverter = 0.264172;
      }

      currencyConverter = this.exchangeClass.exchangeRates[this.dstCurrency] / this.exchangeClass.exchangeRates[this.srcCurrency];
      this.dstPrice = this.srcPrice * currencyConverter / volumeConverter;
    }
  }

}
