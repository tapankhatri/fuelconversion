function load_data() {
    this.get_currency_details();
}

function get_currency_details() {
    var exchange_rates_api = new XMLHttpRequest();
    exchange_rates_api.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
         } else {
            //alert("Error occured while fetching rates")
         }
    };
    exchange_rates_api.open("GET", "https://api.exchangeratesapi.io/latest", true);
    exchange_rates_api.setRequestHeader("Content-type", "application/json");
    exchange_rates_api.send();
}