var app = new Vue({
    el: '#app',
    data: {
        city: "Praha",
        cityInput: "",

        wheather:"",
        humidity: "",
        api: "",

        temperatureMax: "",
        temperatureMin: "",
        windspeed: "",

    },
    created(){
        this.getApi();
    },
    updated(){
        
    },
    methods: {
        getApi: function() 
        {
            console.log("get-api");
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=38c0e9a78d7f11dbc5bd0ab1ed72fb26`).then(
                Response => {
                    this.api = Response.data;
                    if(this.api.name != null){
                    this.wheather = this.api.weather[0].main; // type
                    this.humidity = this.api.main.humidity; //%
                    this.city = app.api.name; //
                    this.temperatureMax = this.kelvinsToCelsius(app.api.main.temp_max); //C
                    this.temperatureMin = this.kelvinsToCelsius(app.api.main.temp_min); //C
                    this.windspeed = this.api.wind.speed; // ms
                    }
                }
            )
        },
        kelvinsToCelsius: function(kelvins) 
        {
            var celsias = kelvins - 273.15;
            return Math.floor(celsias);
        },
        search: function(){
            this.city = this.cityInput;
            this.getApi();
            this.cityInput = this.city;
        },
    }
})