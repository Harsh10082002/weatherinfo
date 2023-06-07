const express = require('express');
const path = require('path');
const app = express();
const https = require('https');

const d = new Date();
const dd = JSON.stringify(d);
var ddd = dd.substring(1, 11);

const hour = d.getHours();
const mints = d.getMinutes();

if (hour > 12) {
    var sel = "PM";
}
else if (hour < 24) {
    var sel = "AM";
}


var date = ddd.substring(8, 11);
var month = ddd.substring(5, 7);
var year = ddd.substring(0, 4);


if (month == 01) {
    month = "Jan";
} if (month == 02) {
    month = "Feb";
} if (month == 04) {
    month = "March";
} if (month == 04) {
    month = "April";
} if (month == 05) {
    month = "May";
} if (month == 06) {
    month = "June";
} if (month == 07) {
    month = "July";
}
if (month == 08) {
    month = "Aug";
} if (month == 09) {
    month = "Sep";
} if (month == 10) {
    month = "Oct";
} if (month == 11) {
    month = "Nov";
} if (month == 12) {
    month = "Dec";
}

const todayDate = `${date}-${month}-${year}`;
const todayTime = `${hour}:${mints} ${sel}`

const file = path.dirname(__filename);

app.use(express.static("public"));

app.use(express.static("public/images"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.render(path.resolve(file + "/views/front.ejs"));
});


app.post('/next', (req, res) => {
    var city1 = req.body.cityName;
    var city2 = req.body.cityNameP2;
    if (city1) {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city1}&appid=cbafedc6214a99a3f10e5420386bdc4f&units=metric`;

        https.get(url, (response) => {

            response.on('data', (data) => {
                let weatherData = JSON.parse(data);

                let today = weatherData.list[0];

                let temp = Math.round(today.main.temp);
                let feels_like = today.main.feels_like;
                let temp_min = today.main.temp_min;
                let temp_max = today.main.temp_max;
                let pressure = today.main.pressure;
                let humidity = today.main.humidity;

                let tempF = Math.round(temp * (9 / 5) + 32);
                // weather
                let description = today.weather[0].description;
                var icon = today.weather[0].icon;

                var todayIconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

                // wind
                let windSpeed = today.wind.speed;
                let windDeg = today.wind.deg;

                // city
                let countryCode = weatherData.city.country;

                let list = weatherData.list;

                for (i = 0; i < 40; i++) {
                    let itemOflist = list[i];

                    let dateByapI = itemOflist.dt_txt;
                    const dateByapIStr = JSON.stringify(dateByapI);
                    var dayByapI = dateByapIStr.substring(9, 11);

                    var timeByapI = dateByapIStr.substring(12, 20);
                    // console.log(timeByapI);

                    let intTodayDay = parseInt(date);

                    // let int1day=intTodayDay;
                    var int2day = intTodayDay + 1;
                    var int3day = intTodayDay + 2;
                    var int4day = intTodayDay + 3;

                    // let int5day = intTodayDay + 4;
                    // let int6day = intTodayDay + 5;

                    if (dayByapI == int2day) {
                        if (timeByapI == '00:00:00') {

                            var icon5_0 = itemOflist.weather[0].icon;
                            var iconSrc5_0 = `https://openweathermap.org/img/wn/${icon5_0}@2x.png`;

                            var temp5_0 = itemOflist.main.temp;
                            var tempFeels5_0 = itemOflist.main.feels_like;
                            var humidity5_0 = itemOflist.main.humidity;
                            var wind5_0 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '03:00:00') {
                            var icon5_3 = itemOflist.weather[0].icon;
                            var iconSrc5_3 = `https://openweathermap.org/img/wn/${icon5_3}@2x.png`;

                            var temp5_3 = itemOflist.main.temp;
                            var tempFeels5_3 = itemOflist.main.feels_like;
                            var humidity5_3 = itemOflist.main.humidity;
                            var wind5_3 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '06:00:00') {
                            var icon5_6 = itemOflist.weather[0].icon;
                            var iconSrc5_6 = `https://openweathermap.org/img/wn/${icon5_6}@2x.png`;

                            var temp5_6 = itemOflist.main.temp;
                            var tempFeels5_6 = itemOflist.main.feels_like;
                            var humidity5_6 = itemOflist.main.humidity;
                            var wind5_6 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '09:00:00') {
                            var icon5_9 = itemOflist.weather[0].icon;
                            var iconSrc5_9 = `https://openweathermap.org/img/wn/${icon5_9}@2x.png`;

                            var temp5_9 = itemOflist.main.temp;
                            var tempFeels5_9 = itemOflist.main.feels_like;
                            var humidity5_9 = itemOflist.main.humidity;
                            var wind5_9 = itemOflist.wind.speed;
                        }

                        if (timeByapI == '12:00:00') {

                            var icon5_12 = itemOflist.weather[0].icon;
                            var iconSrc5_12 = `https://openweathermap.org/img/wn/${icon5_12}@2x.png`;

                            var temp5_12 = itemOflist.main.temp;
                            var tempFeels5_12 = itemOflist.main.feels_like;
                            var humidity5_12 = itemOflist.main.humidity;
                            var wind5_12 = itemOflist.wind.speed18
                        }
                        if (timeByapI == '15:00:00') {
                            var icon5_15 = itemOflist.weather[0].icon;
                            var iconSrc5_15 = `https://openweathermap.org/img/wn/${icon5_15}@2x.png`;

                            var temp5_15 = itemOflist.main.temp;
                            var tempFeels5_15 = itemOflist.main.feels_like;
                            var humidity5_15 = itemOflist.main.humidity;
                            var wind5_15 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '18:00:00') {
                            var icon5_18 = itemOflist.weather[0].icon;
                            var iconSrc5_18 = `https://openweathermap.org/img/wn/${icon5_18}@2x.png`;

                            var temp5_18 = itemOflist.main.temp;
                            var tempFeels5_18 = itemOflist.main.feels_like;
                            var humidity5_18 = itemOflist.main.humidity;
                            var wind5_18 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '21:00:00') {
                            var icon5_21 = itemOflist.weather[0].icon;
                            var iconSrc5_21 = `https://openweathermap.org/img/wn/${icon5_21}@2x.png`;

                            var temp5_21 = itemOflist.main.temp;
                            var tempFeels5_21 = itemOflist.main.feels_like;
                            var humidity5_21 = itemOflist.main.humidity;
                            var wind5_21 = itemOflist.wind.speed;
                        }
                    }

                    if (dayByapI == int3day) {
                        if (timeByapI == '00:00:00') {

                            var icon5_0_3day = itemOflist.weather[0].icon;
                            var iconSrc5_0_3day = `https://openweathermap.org/img/wn/${icon5_0_3day}@2x.png`;

                            var temp5_0_3day = itemOflist.main.temp;
                            var tempFeels5_0_3day = itemOflist.main.feels_like;
                            var humidity5_0_3day = itemOflist.main.humidity;
                            var wind5_0_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '03:00:00') {
                            var icon5_3_3day = itemOflist.weather[0].icon;
                            var iconSrc5_3_3day = `https://openweathermap.org/img/wn/${icon5_3_3day}@2x.png`;

                            var temp5_3_3day = itemOflist.main.temp;
                            var tempFeels5_3_3day = itemOflist.main.feels_like;
                            var humidity5_3_3day = itemOflist.main.humidity;
                            var wind5_3_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '06:00:00') {
                            var icon5_6_3day = itemOflist.weather[0].icon;
                            var iconSrc5_6_3day = `https://openweathermap.org/img/wn/${icon5_6_3day}@2x.png`;

                            var temp5_6_3day = itemOflist.main.temp;
                            var tempFeels5_6_3day = itemOflist.main.feels_like;
                            var humidity5_6_3day = itemOflist.main.humidity;
                            var wind5_6_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '09:00:00') {
                            var icon5_9_3day = itemOflist.weather[0].icon;
                            var iconSrc5_9_3day = `https://openweathermap.org/img/wn/${icon5_9_3day}@2x.png`;

                            var temp5_9_3day = itemOflist.main.temp;
                            var tempFeels5_9_3day = itemOflist.main.feels_like;
                            var humidity5_9_3day = itemOflist.main.humidity;
                            var wind5_9_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '12:00:00') {

                            var icon5_12_3day = itemOflist.weather[0].icon;
                            var iconSrc5_12_3day = `https://openweathermap.org/img/wn/${icon5_12_3day}@2x.png`;

                            var temp5_12_3day = itemOflist.main.temp;
                            var tempFeels5_12_3day = itemOflist.main.feels_like;
                            var humidity5_12_3day = itemOflist.main.humidity;
                            var wind5_12_3day = itemOflist.wind.speed18
                        }
                        if (timeByapI == '15:00:00') {
                            var icon5_15_3day = itemOflist.weather[0].icon;
                            var iconSrc5_15_3day = `https://openweathermap.org/img/wn/${icon5_15_3day}@2x.png`;

                            var temp5_15_3day = itemOflist.main.temp;
                            var tempFeels5_15_3day = itemOflist.main.feels_like;
                            var humidity5_15_3day = itemOflist.main.humidity;
                            var wind5_15_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '18:00:00') {
                            var icon5_18_3day = itemOflist.weather[0].icon;
                            var iconSrc5_18_3day = `https://openweathermap.org/img/wn/${icon5_18_3day}@2x.png`;

                            var temp5_18_3day = itemOflist.main.temp;
                            var tempFeels5_18_3day = itemOflist.main.feels_like;
                            var humidity5_18_3day = itemOflist.main.humidity;
                            var wind5_18_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '21:00:00') {
                            var icon5_21_3day = itemOflist.weather[0].icon;
                            var iconSrc5_21_3day = `https://openweathermap.org/img/wn/${icon5_21_3day}@2x.png`;

                            var temp5_21_3day = itemOflist.main.temp;
                            var tempFeels5_21_3day = itemOflist.main.feels_like;
                            var humidity5_21_3day = itemOflist.main.humidity;
                            var wind5_21_3day = itemOflist.wind.speed;
                        }
                    }

                    if (dayByapI == int4day) {
                        if (timeByapI == '00:00:00') {
                    
                            
                            var icon5_0_4day = itemOflist.weather[0].icon;
                            var iconSrc5_0_4day = `https://openweathermap.org/img/wn/${icon5_0_4day}@2x.png`;
                    
                            var temp5_0_4day = itemOflist.main.temp;
                            var tempFeels5_0_4day = itemOflist.main.feels_like;
                            var humidity5_0_4day = itemOflist.main.humidity;
                            var wind5_0_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '03:00:00') {
                            var icon5_3_4day = itemOflist.weather[0].icon;
                            var iconSrc5_3_4day = `https://openweathermap.org/img/wn/${icon5_3_4day}@2x.png`;
                    
                            var temp5_3_4day = itemOflist.main.temp;
                            var tempFeels5_3_4day = itemOflist.main.feels_like;
                            var humidity5_3_4day = itemOflist.main.humidity;
                            var wind5_3_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '06:00:00') {
                            var icon5_6_4day = itemOflist.weather[0].icon;
                            var iconSrc5_6_4day = `https://openweathermap.org/img/wn/${icon5_6_4day}@2x.png`;
                    
                            var temp5_6_4day = itemOflist.main.temp;
                            var tempFeels5_6_4day = itemOflist.main.feels_like;
                            var humidity5_6_4day = itemOflist.main.humidity;
                            var wind5_6_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '09:00:00') {
                            var icon5_9_4day = itemOflist.weather[0].icon;
                            var iconSrc5_9_4day = `https://openweathermap.org/img/wn/${icon5_9_4day}@2x.png`;
                    
                            var temp5_9_4day = itemOflist.main.temp;
                            var tempFeels5_9_4day = itemOflist.main.feels_like;
                            var humidity5_9_4day = itemOflist.main.humidity;
                            var wind5_9_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '12:00:00') {
                    
                            var icon5_12_4day = itemOflist.weather[0].icon;
                            var iconSrc5_12_4day = `https://openweathermap.org/img/wn/${icon5_12_4day}@2x.png`;
                    
                            var temp5_12_4day = itemOflist.main.temp;
                            var tempFeels5_12_4day = itemOflist.main.feels_like;
                            var humidity5_12_4day = itemOflist.main.humidity;
                            var wind5_12_4day = itemOflist.wind.speed18
                        }
                        if (timeByapI == '15:00:00') {
                            var icon5_15_4day = itemOflist.weather[0].icon;
                            var iconSrc5_15_4day = `https://openweathermap.org/img/wn/${icon5_15_4day}@2x.png`;
                    
                            var temp5_15_4day = itemOflist.main.temp;
                            var tempFeels5_15_4day = itemOflist.main.feels_like;
                            var humidity5_15_4day = itemOflist.main.humidity;
                            var wind5_15_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '18:00:00') {
                            var icon5_18_4day = itemOflist.weather[0].icon;
                            var iconSrc5_18_4day = `https://openweathermap.org/img/wn/${icon5_18_4day}@2x.png`;
                    
                            var temp5_18_4day = itemOflist.main.temp;
                            var tempFeels5_18_4day = itemOflist.main.feels_like;
                            var humidity5_18_4day = itemOflist.main.humidity;
                            var wind5_18_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '21:00:00') {
                            var icon5_21_4day = itemOflist.weather[0].icon;
                            var iconSrc5_21_4day = `https://openweathermap.org/img/wn/${icon5_21_4day}@2x.png`;
                    
                            var temp5_21_4day = itemOflist.main.temp;
                            var tempFeels5_21_4day = itemOflist.main.feels_like;
                            var humidity5_21_4day = itemOflist.main.humidity;
                            var wind5_21_4day = itemOflist.wind.speed;
                        }
                    }
                }
                res.render(path.resolve(file + "/views/nextP.ejs"), {
                    city: city1, location: countryCode, clouds: description, todayIconSrc: todayIconSrc, temp: temp,
                    tFeels: feels_like, tempF: tempF,todayDate:todayDate, todayTime:todayTime,month:month,year:year,
                    tempMinimum: temp_min, tempMaximum: temp_max, pressure: pressure, humidity: humidity,
                    windSpeed: windSpeed, windDegree: windDeg, countrycode: countryCode, date: todayDate,

                    int2day: int2day, iconSrc5_0: iconSrc5_0, temp5_0: temp5_0, tempFeels5_0: tempFeels5_0, humidity5_0: humidity5_0, wind5_0: wind5_0,
                    iconSrc5_3: iconSrc5_3, temp5_3: temp5_3, tempFeels5_3: tempFeels5_3, humidity5_3: humidity5_3, wind5_3: wind5_3,
                    iconSrc5_6: iconSrc5_6, temp5_6: temp5_6, tempFeels5_6: tempFeels5_6, humidity5_6: humidity5_6, wind5_6: wind5_6,
                    iconSrc5_9: iconSrc5_9, temp5_9: temp5_9, tempFeels5_9: tempFeels5_9, humidity5_9: humidity5_9, wind5_9: wind5_9,
                    iconSrc5_12: iconSrc5_12, temp5_12: temp5_12, tempFeels5_12: tempFeels5_12, humidity5_12: humidity5_12, wind5_12: wind5_12,
                    iconSrc5_15: iconSrc5_15, temp5_15: temp5_15, tempFeels5_15: tempFeels5_15, humidity5_15: humidity5_15, wind5_15: wind5_15,
                    iconSrc5_18: iconSrc5_18, temp5_18: temp5_18, tempFeels5_18: tempFeels5_18, humidity5_18: humidity5_18, wind5_18: wind5_18,
                    iconSrc5_21: iconSrc5_21, temp5_21: temp5_21, tempFeels5_21: tempFeels5_21, humidity5_21: humidity5_21, wind5_21: wind5_21,

                    int3day: int3day, iconSrc5_0_3day: iconSrc5_0_3day, temp5_0_3day: temp5_0_3day, tempFeels5_0_3day: tempFeels5_0_3day, humidity5_0_3day: humidity5_0_3day, wind5_0_3day: wind5_0_3day,
                    iconSrc5_3_3day: iconSrc5_3_3day, temp5_3_3day: temp5_3_3day, tempFeels5_3_3day: tempFeels5_3_3day, humidity5_3_3day: humidity5_3_3day, wind5_3_3day: wind5_3_3day,
                    iconSrc5_6_3day: iconSrc5_6_3day, temp5_6_3day: temp5_6_3day, tempFeels5_6_3day: tempFeels5_6_3day, humidity5_6_3day: humidity5_6_3day, wind5_6_3day: wind5_6_3day,
                    iconSrc5_9_3day: iconSrc5_9_3day, temp5_9_3day: temp5_9_3day, tempFeels5_9_3day: tempFeels5_9_3day, humidity5_9_3day: humidity5_9_3day, wind5_9_3day: wind5_9_3day,
                    iconSrc5_12_3day: iconSrc5_12_3day, temp5_12_3day: temp5_12_3day, tempFeels5_12_3day: tempFeels5_12_3day, humidity5_12_3day: humidity5_12_3day, wind5_12_3day: wind5_12_3day,
                    iconSrc5_15_3day: iconSrc5_15_3day, temp5_15_3day: temp5_15_3day, tempFeels5_15_3day: tempFeels5_15_3day, humidity5_15_3day: humidity5_15_3day, wind5_15_3day: wind5_15_3day,
                    iconSrc5_18_3day: iconSrc5_18_3day, temp5_18_3day: temp5_18_3day, tempFeels5_18_3day: tempFeels5_18_3day, humidity5_18_3day: humidity5_18_3day, wind5_18_3day: wind5_18_3day,
                    iconSrc5_21_3day: iconSrc5_21_3day, temp5_21_3day: temp5_21_3day, tempFeels5_21_3day: tempFeels5_21_3day, humidity5_21_3day: humidity5_21_3day, wind5_21_3day: wind5_21_3day,

                    int4day: int4day, iconSrc5_0_4day: iconSrc5_0_4day, temp5_0_4day: temp5_0_4day, tempFeels5_0_4day: tempFeels5_0_4day, humidity5_0_4day: humidity5_0_4day, wind5_0_4day: wind5_0_4day,
                    iconSrc5_3_4day: iconSrc5_3_4day, temp5_3_4day: temp5_3_4day, tempFeels5_3_4day: tempFeels5_3_4day, humidity5_3_4day: humidity5_3_4day, wind5_3_4day: wind5_3_4day,
                    iconSrc5_6_4day: iconSrc5_6_4day, temp5_6_4day: temp5_6_4day, tempFeels5_6_4day: tempFeels5_6_4day, humidity5_6_4day: humidity5_6_4day, wind5_6_4day: wind5_6_4day,
                    iconSrc5_9_4day: iconSrc5_9_4day, temp5_9_4day: temp5_9_4day, tempFeels5_9_4day: tempFeels5_9_4day, humidity5_9_4day: humidity5_9_4day, wind5_9_4day: wind5_9_4day,
                    iconSrc5_12_4day: iconSrc5_12_4day, temp5_12_4day: temp5_12_4day, tempFeels5_12_4day: tempFeels5_12_4day, humidity5_12_4day: humidity5_12_4day, wind5_12_4day: wind5_12_4day,
                    iconSrc5_15_4day: iconSrc5_15_4day, temp5_15_4day: temp5_15_4day, tempFeels5_15_4day: tempFeels5_15_4day, humidity5_15_4day: humidity5_15_4day, wind5_15_4day: wind5_15_4day,
                    iconSrc5_18_4day: iconSrc5_18_4day, temp5_18_4day: temp5_18_4day, tempFeels5_18_4day: tempFeels5_18_4day, humidity5_18_4day: humidity5_18_4day, wind5_18_4day: wind5_18_4day,
                    iconSrc5_21_4day: iconSrc5_21_4day, temp5_21_4day: temp5_21_4day, tempFeels5_21_4day: tempFeels5_21_4day, humidity5_21_4day: humidity5_21_4day, wind5_21_4day: wind5_21_4day,



                });
            }
            )
        })
    }

    if (city2) {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city2}&appid=cbafedc6214a99a3f10e5420386bdc4f&units=metric`;

        https.get(url, (response) => {

            response.on('data', (data) => {
                let weatherData = JSON.parse(data);

                let today = weatherData.list[0];

                let temp = Math.round(today.main.temp);
                let feels_like = today.main.feels_like;
                let temp_min = today.main.temp_min;
                let temp_max = today.main.temp_max;
                let pressure = today.main.pressure;
                let humidity = today.main.humidity;

                let tempF = Math.round(temp * (9 / 5) + 32);
                // weather
                let description = today.weather[0].description;
                var icon = today.weather[0].icon;

                var todayIconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

                // wind
                let windSpeed = today.wind.speed;
                let windDeg = today.wind.deg;

                // city
                let countryCode = weatherData.city.country;

                let list = weatherData.list;

                for (i = 0; i < 40; i++) {
                    let itemOflist = list[i];

                    let dateByapI = itemOflist.dt_txt;
                    const dateByapIStr = JSON.stringify(dateByapI);
                    var dayByapI = dateByapIStr.substring(9, 11);

                    var timeByapI = dateByapIStr.substring(12, 20);

                    let intTodayDay = parseInt(date);

                    // let int1day=intTodayDay;
                    var int2day = intTodayDay + 1;
                    var int3day = intTodayDay + 2;
                    var int4day = intTodayDay + 3;

                    // let int5day = intTodayDay + 4;
                    // let int6day = intTodayDay + 5;

                    if (dayByapI == int2day) {
                        if (timeByapI == '00:00:00') {

                            var icon5_0 = itemOflist.weather[0].icon;
                            var iconSrc5_0 = `https://openweathermap.org/img/wn/${icon5_0}@2x.png`;

                            var temp5_0 = itemOflist.main.temp;
                            var tempFeels5_0 = itemOflist.main.feels_like;
                            var humidity5_0 = itemOflist.main.humidity;
                            var wind5_0 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '03:00:00') {
                            var icon5_3 = itemOflist.weather[0].icon;
                            var iconSrc5_3 = `https://openweathermap.org/img/wn/${icon5_3}@2x.png`;

                            var temp5_3 = itemOflist.main.temp;
                            var tempFeels5_3 = itemOflist.main.feels_like;
                            var humidity5_3 = itemOflist.main.humidity;
                            var wind5_3 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '06:00:00') {
                            var icon5_6 = itemOflist.weather[0].icon;
                            var iconSrc5_6 = `https://openweathermap.org/img/wn/${icon5_6}@2x.png`;

                            var temp5_6 = itemOflist.main.temp;
                            var tempFeels5_6 = itemOflist.main.feels_like;
                            var humidity5_6 = itemOflist.main.humidity;
                            var wind5_6 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '09:00:00') {
                            var icon5_9 = itemOflist.weather[0].icon;
                            var iconSrc5_9 = `https://openweathermap.org/img/wn/${icon5_9}@2x.png`;

                            var temp5_9 = itemOflist.main.temp;
                            var tempFeels5_9 = itemOflist.main.feels_like;
                            var humidity5_9 = itemOflist.main.humidity;
                            var wind5_9 = itemOflist.wind.speed;
                        }

                        if (timeByapI == '12:00:00') {

                            var icon5_12 = itemOflist.weather[0].icon;
                            var iconSrc5_12 = `https://openweathermap.org/img/wn/${icon5_12}@2x.png`;

                            var temp5_12 = itemOflist.main.temp;
                            var tempFeels5_12 = itemOflist.main.feels_like;
                            var humidity5_12 = itemOflist.main.humidity;
                            var wind5_12 = itemOflist.wind.speed18
                        }
                        if (timeByapI == '15:00:00') {
                            var icon5_15 = itemOflist.weather[0].icon;
                            var iconSrc5_15 = `https://openweathermap.org/img/wn/${icon5_15}@2x.png`;

                            var temp5_15 = itemOflist.main.temp;
                            var tempFeels5_15 = itemOflist.main.feels_like;
                            var humidity5_15 = itemOflist.main.humidity;
                            var wind5_15 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '18:00:00') {
                            var icon5_18 = itemOflist.weather[0].icon;
                            var iconSrc5_18 = `https://openweathermap.org/img/wn/${icon5_18}@2x.png`;

                            var temp5_18 = itemOflist.main.temp;
                            var tempFeels5_18 = itemOflist.main.feels_like;
                            var humidity5_18 = itemOflist.main.humidity;
                            var wind5_18 = itemOflist.wind.speed;
                        }
                        if (timeByapI == '21:00:00') {
                            var icon5_21 = itemOflist.weather[0].icon;
                            var iconSrc5_21 = `https://openweathermap.org/img/wn/${icon5_21}@2x.png`;

                            var temp5_21 = itemOflist.main.temp;
                            var tempFeels5_21 = itemOflist.main.feels_like;
                            var humidity5_21 = itemOflist.main.humidity;
                            var wind5_21 = itemOflist.wind.speed;
                        }
                    }

                    if (dayByapI == int3day) {
                        if (timeByapI == '00:00:00') {

                            var icon5_0_3day = itemOflist.weather[0].icon;
                            var iconSrc5_0_3day = `https://openweathermap.org/img/wn/${icon5_0_3day}@2x.png`;

                            var temp5_0_3day = itemOflist.main.temp;
                            var tempFeels5_0_3day = itemOflist.main.feels_like;
                            var humidity5_0_3day = itemOflist.main.humidity;
                            var wind5_0_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '03:00:00') {
                            var icon5_3_3day = itemOflist.weather[0].icon;
                            var iconSrc5_3_3day = `https://openweathermap.org/img/wn/${icon5_3_3day}@2x.png`;

                            var temp5_3_3day = itemOflist.main.temp;
                            var tempFeels5_3_3day = itemOflist.main.feels_like;
                            var humidity5_3_3day = itemOflist.main.humidity;
                            var wind5_3_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '06:00:00') {
                            var icon5_6_3day = itemOflist.weather[0].icon;
                            var iconSrc5_6_3day = `https://openweathermap.org/img/wn/${icon5_6_3day}@2x.png`;

                            var temp5_6_3day = itemOflist.main.temp;
                            var tempFeels5_6_3day = itemOflist.main.feels_like;
                            var humidity5_6_3day = itemOflist.main.humidity;
                            var wind5_6_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '09:00:00') {
                            var icon5_9_3day = itemOflist.weather[0].icon;
                            var iconSrc5_9_3day = `https://openweathermap.org/img/wn/${icon5_9_3day}@2x.png`;

                            var temp5_9_3day = itemOflist.main.temp;
                            var tempFeels5_9_3day = itemOflist.main.feels_like;
                            var humidity5_9_3day = itemOflist.main.humidity;
                            var wind5_9_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '12:00:00') {

                            var icon5_12_3day = itemOflist.weather[0].icon;
                            var iconSrc5_12_3day = `https://openweathermap.org/img/wn/${icon5_12_3day}@2x.png`;

                            var temp5_12_3day = itemOflist.main.temp;
                            var tempFeels5_12_3day = itemOflist.main.feels_like;
                            var humidity5_12_3day = itemOflist.main.humidity;
                            var wind5_12_3day = itemOflist.wind.speed18
                        }
                        if (timeByapI == '15:00:00') {
                            var icon5_15_3day = itemOflist.weather[0].icon;
                            var iconSrc5_15_3day = `https://openweathermap.org/img/wn/${icon5_15_3day}@2x.png`;

                            var temp5_15_3day = itemOflist.main.temp;
                            var tempFeels5_15_3day = itemOflist.main.feels_like;
                            var humidity5_15_3day = itemOflist.main.humidity;
                            var wind5_15_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '18:00:00') {
                            var icon5_18_3day = itemOflist.weather[0].icon;
                            var iconSrc5_18_3day = `https://openweathermap.org/img/wn/${icon5_18_3day}@2x.png`;

                            var temp5_18_3day = itemOflist.main.temp;
                            var tempFeels5_18_3day = itemOflist.main.feels_like;
                            var humidity5_18_3day = itemOflist.main.humidity;
                            var wind5_18_3day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '21:00:00') {
                            var icon5_21_3day = itemOflist.weather[0].icon;
                            var iconSrc5_21_3day = `https://openweathermap.org/img/wn/${icon5_21_3day}@2x.png`;

                            var temp5_21_3day = itemOflist.main.temp;
                            var tempFeels5_21_3day = itemOflist.main.feels_like;
                            var humidity5_21_3day = itemOflist.main.humidity;
                            var wind5_21_3day = itemOflist.wind.speed;
                        }
                    }

                    if (dayByapI == int4day) {
                        if (timeByapI == '00:00:00') {
                    
                            
                            var icon5_0_4day = itemOflist.weather[0].icon;
                            var iconSrc5_0_4day = `https://openweathermap.org/img/wn/${icon5_0_4day}@2x.png`;
                    
                            var temp5_0_4day = itemOflist.main.temp;
                            var tempFeels5_0_4day = itemOflist.main.feels_like;
                            var humidity5_0_4day = itemOflist.main.humidity;
                            var wind5_0_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '03:00:00') {
                            var icon5_3_4day = itemOflist.weather[0].icon;
                            var iconSrc5_3_4day = `https://openweathermap.org/img/wn/${icon5_3_4day}@2x.png`;
                    
                            var temp5_3_4day = itemOflist.main.temp;
                            var tempFeels5_3_4day = itemOflist.main.feels_like;
                            var humidity5_3_4day = itemOflist.main.humidity;
                            var wind5_3_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '06:00:00') {
                            var icon5_6_4day = itemOflist.weather[0].icon;
                            var iconSrc5_6_4day = `https://openweathermap.org/img/wn/${icon5_6_4day}@2x.png`;
                    
                            var temp5_6_4day = itemOflist.main.temp;
                            var tempFeels5_6_4day = itemOflist.main.feels_like;
                            var humidity5_6_4day = itemOflist.main.humidity;
                            var wind5_6_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '09:00:00') {
                            var icon5_9_4day = itemOflist.weather[0].icon;
                            var iconSrc5_9_4day = `https://openweathermap.org/img/wn/${icon5_9_4day}@2x.png`;
                    
                            var temp5_9_4day = itemOflist.main.temp;
                            var tempFeels5_9_4day = itemOflist.main.feels_like;
                            var humidity5_9_4day = itemOflist.main.humidity;
                            var wind5_9_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '12:00:00') {
                    
                            var icon5_12_4day = itemOflist.weather[0].icon;
                            var iconSrc5_12_4day = `https://openweathermap.org/img/wn/${icon5_12_4day}@2x.png`;
                    
                            var temp5_12_4day = itemOflist.main.temp;
                            var tempFeels5_12_4day = itemOflist.main.feels_like;
                            var humidity5_12_4day = itemOflist.main.humidity;
                            var wind5_12_4day = itemOflist.wind.speed18
                        }
                        if (timeByapI == '15:00:00') {
                            var icon5_15_4day = itemOflist.weather[0].icon;
                            var iconSrc5_15_4day = `https://openweathermap.org/img/wn/${icon5_15_4day}@2x.png`;
                    
                            var temp5_15_4day = itemOflist.main.temp;
                            var tempFeels5_15_4day = itemOflist.main.feels_like;
                            var humidity5_15_4day = itemOflist.main.humidity;
                            var wind5_15_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '18:00:00') {
                            var icon5_18_4day = itemOflist.weather[0].icon;
                            var iconSrc5_18_4day = `https://openweathermap.org/img/wn/${icon5_18_4day}@2x.png`;
                    
                            var temp5_18_4day = itemOflist.main.temp;
                            var tempFeels5_18_4day = itemOflist.main.feels_like;
                            var humidity5_18_4day = itemOflist.main.humidity;
                            var wind5_18_4day = itemOflist.wind.speed;
                        }
                        if (timeByapI == '21:00:00') {
                            var icon5_21_4day = itemOflist.weather[0].icon;
                            var iconSrc5_21_4day = `https://openweathermap.org/img/wn/${icon5_21_4day}@2x.png`;
                    
                            var temp5_21_4day = itemOflist.main.temp;
                            var tempFeels5_21_4day = itemOflist.main.feels_like;
                            var humidity5_21_4day = itemOflist.main.humidity;
                            var wind5_21_4day = itemOflist.wind.speed;
                        }
                    }
                }
                res.render(path.resolve(file + "/views/nextP.ejs"), {
                    city: city2, location: countryCode, clouds: description, todayIconSrc: todayIconSrc,
                    temp: temp, tFeels: feels_like, tempF: tempF, todayDate:todayDate, todayTime:todayTime,month:month,year:year,
                    tempMinimum: temp_min, tempMaximum: temp_max, pressure: pressure, humidity: humidity,
                    windSpeed: windSpeed, windDegree: windDeg, countrycode: countryCode, date: todayDate,

                    int2day: int2day, iconSrc5_0: iconSrc5_0, temp5_0: temp5_0, tempFeels5_0: tempFeels5_0, humidity5_0: humidity5_0, wind5_0: wind5_0,
                    iconSrc5_3: iconSrc5_3, temp5_3: temp5_3, tempFeels5_3: tempFeels5_3, humidity5_3: humidity5_3, wind5_3: wind5_3,
                    iconSrc5_6: iconSrc5_6, temp5_6: temp5_6, tempFeels5_6: tempFeels5_6, humidity5_6: humidity5_6, wind5_6: wind5_6,
                    iconSrc5_9: iconSrc5_9, temp5_9: temp5_9, tempFeels5_9: tempFeels5_9, humidity5_9: humidity5_9, wind5_9: wind5_9,
                    iconSrc5_12: iconSrc5_12, temp5_12: temp5_12, tempFeels5_12: tempFeels5_12, humidity5_12: humidity5_12, wind5_12: wind5_12,
                    iconSrc5_15: iconSrc5_15, temp5_15: temp5_15, tempFeels5_15: tempFeels5_15, humidity5_15: humidity5_15, wind5_15: wind5_15,
                    iconSrc5_18: iconSrc5_18, temp5_18: temp5_18, tempFeels5_18: tempFeels5_18, humidity5_18: humidity5_18, wind5_18: wind5_18,
                    iconSrc5_21: iconSrc5_21, temp5_21: temp5_21, tempFeels5_21: tempFeels5_21, humidity5_21: humidity5_21, wind5_21: wind5_21,

                    int3day: int3day, iconSrc5_0_3day: iconSrc5_0_3day, temp5_0_3day: temp5_0_3day, tempFeels5_0_3day: tempFeels5_0_3day, humidity5_0_3day: humidity5_0_3day, wind5_0_3day: wind5_0_3day,
                    iconSrc5_3_3day: iconSrc5_3_3day, temp5_3_3day: temp5_3_3day, tempFeels5_3_3day: tempFeels5_3_3day, humidity5_3_3day: humidity5_3_3day, wind5_3_3day: wind5_3_3day,
                    iconSrc5_6_3day: iconSrc5_6_3day, temp5_6_3day: temp5_6_3day, tempFeels5_6_3day: tempFeels5_6_3day, humidity5_6_3day: humidity5_6_3day, wind5_6_3day: wind5_6_3day,
                    iconSrc5_9_3day: iconSrc5_9_3day, temp5_9_3day: temp5_9_3day, tempFeels5_9_3day: tempFeels5_9_3day, humidity5_9_3day: humidity5_9_3day, wind5_9_3day: wind5_9_3day,
                    iconSrc5_12_3day: iconSrc5_12_3day, temp5_12_3day: temp5_12_3day, tempFeels5_12_3day: tempFeels5_12_3day, humidity5_12_3day: humidity5_12_3day, wind5_12_3day: wind5_12_3day,
                    iconSrc5_15_3day: iconSrc5_15_3day, temp5_15_3day: temp5_15_3day, tempFeels5_15_3day: tempFeels5_15_3day, humidity5_15_3day: humidity5_15_3day, wind5_15_3day: wind5_15_3day,
                    iconSrc5_18_3day: iconSrc5_18_3day, temp5_18_3day: temp5_18_3day, tempFeels5_18_3day: tempFeels5_18_3day, humidity5_18_3day: humidity5_18_3day, wind5_18_3day: wind5_18_3day,
                    iconSrc5_21_3day: iconSrc5_21_3day, temp5_21_3day: temp5_21_3day, tempFeels5_21_3day: tempFeels5_21_3day, humidity5_21_3day: humidity5_21_3day, wind5_21_3day: wind5_21_3day,

                    int4day: int4day, iconSrc5_0_4day: iconSrc5_0_4day, temp5_0_4day: temp5_0_4day, tempFeels5_0_4day: tempFeels5_0_4day, humidity5_0_4day: humidity5_0_4day, wind5_0_4day: wind5_0_4day,
                    iconSrc5_3_4day: iconSrc5_3_4day, temp5_3_4day: temp5_3_4day, tempFeels5_3_4day: tempFeels5_3_4day, humidity5_3_4day: humidity5_3_4day, wind5_3_4day: wind5_3_4day,
                    iconSrc5_6_4day: iconSrc5_6_4day, temp5_6_4day: temp5_6_4day, tempFeels5_6_4day: tempFeels5_6_4day, humidity5_6_4day: humidity5_6_4day, wind5_6_4day: wind5_6_4day,
                    iconSrc5_9_4day: iconSrc5_9_4day, temp5_9_4day: temp5_9_4day, tempFeels5_9_4day: tempFeels5_9_4day, humidity5_9_4day: humidity5_9_4day, wind5_9_4day: wind5_9_4day,
                    iconSrc5_12_4day: iconSrc5_12_4day, temp5_12_4day: temp5_12_4day, tempFeels5_12_4day: tempFeels5_12_4day, humidity5_12_4day: humidity5_12_4day, wind5_12_4day: wind5_12_4day,
                    iconSrc5_15_4day: iconSrc5_15_4day, temp5_15_4day: temp5_15_4day, tempFeels5_15_4day: tempFeels5_15_4day, humidity5_15_4day: humidity5_15_4day, wind5_15_4day: wind5_15_4day,
                    iconSrc5_18_4day: iconSrc5_18_4day, temp5_18_4day: temp5_18_4day, tempFeels5_18_4day: tempFeels5_18_4day, humidity5_18_4day: humidity5_18_4day, wind5_18_4day: wind5_18_4day,
                    iconSrc5_21_4day: iconSrc5_21_4day, temp5_21_4day: temp5_21_4day, tempFeels5_21_4day: tempFeels5_21_4day, humidity5_21_4day: humidity5_21_4day, wind5_21_4day: wind5_21_4day,



                });
            }
            )
        })
    }
});

const PORT = process.env.PORT||8000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})