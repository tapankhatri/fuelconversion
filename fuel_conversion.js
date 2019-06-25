this.currency_options = {}

function load_data() {
    chi.floatingLabel(document.getElementById('input_price_div'));
    chi.floatingLabel(document.getElementById('input_currency_div'));
    chi.floatingLabel(document.getElementById('output_currency_div'));
    this.fetch_currency_details();
}

function fetch_currency_details() {
    fetch('https://api.exchangeratesapi.io/latest')
        .then(function(response) {
            return response.json();
        })
        .then(function(exchange_rates) {
            log_exchange_rates(exchange_rates);
        });
}

function log_exchange_rates(exchange_rates) {
    this.currency_options[exchange_rates.base] = 1

    for (var k in exchange_rates.rates) {
        if (exchange_rates.rates.hasOwnProperty(k)) {
           this.currency_options[k] = exchange_rates.rates[k];
        }
    }

    console.log(this.currency_options);
    this.update_currency_options();
}

function update_currency_options() {
    input_currency_options = document.getElementById("input_currency");
    output_currency_options = document.getElementById("output_currency");

    keys = Object.keys(this.currency_options);
    keys.sort();
    console.log(keys)
    for (i in keys) {
        input_currency_options.innerHTML += "<option>"+keys[i]+"</option>";
        output_currency_options.innerHTML += "<option>"+keys[i]+"</option>";
    }
}