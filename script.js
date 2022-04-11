console.log("hello World!");

let area_loation = document.getElementById("location");

let container1 = document.getElementById("container1");




// function getdata(){
//     url = "aditya.txt";
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// getdata();

// document.body.style.backgroundImage = "url('/wearther_photo/cloudy.jpg')"

function getdata() {
  var local_area = document.getElementById("area").value;
  setInterval(get_data, 600000);
  let ar = local_area;
  let api_key = "1501913eac2b4051bfb114022223103";
  url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${ar}&days=1&aqi=yes&alerts=yes`;
  function get_data() {
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);

      //Background image

      let cond = document.getElementById("condition").innerHTML = data.current.condition.text;

      if (cond == "Sunny") {
        document.body.style.backgroundImage = "url('/wearther_photo/sunny.png')"
      } else if (cond == "Cloudy") {
        document.body.style.backgroundImage = "url('/wearther_photo/cloudy/pic1.gif')"
      } else if (cond == "Patchy rain possible") {
        document.body.style.backgroundImage = "url('/wearther_photo/rain1.gif')"
      } else if (cond == "Partly cloudy") {
        document.body.style.backgroundImage = "url('/wearther_photo/cloudy/partly_cloudy.jpg')"
      } else if (cond == "Overcast") {
        document.body.style.backgroundImage = "url('/wearther_photo/cloudy/pic2.gif')"
      } else if (cond == "Light snow showers") {
        document.body.style.backgroundImage = "url('/wearther_photo/snow/light_snow.gif')"
      } else if (cond == "Moderate or heavy snow showers") {
        document.body.style.backgroundImage = "url('/wearther_photo/snow/snow.gif')"
      } else if (cond == "Light sleet showers") {
        document.body.style.backgroundImage = "url('/wearther_photo/partly_cloudy1.jpg')"
      } else if (cond == "Patchy snow possible") {
        document.body.style.backgroundImage = "url('/wearther_photo/snow/light_snow.gif')"
      } else if (cond == "Clear") {
        document.body.style.backgroundImage = "url('/wearther_photo/clear3.gif')"
      } else if (cond == "Patchy light snow") {
        document.body.style.backgroundImage = "url('/wearther_photo/snow/light_snow.gif')"
      } else if (cond == "Light snow") {
        document.body.style.backgroundImage = "url('/wearther_photo/snow/light_snow1.gif')"
      } else if (cond == "Light rain shower") {
        document.body.style.backgroundImage = "url('/wearther_photo/rain1.gif')"
      } else if (cond == "Moderate rain") {
        document.body.style.backgroundImage = "url('/wearther_photo/partly_cloudy1.jpg')"
      } else if (cond == "Light drizzle") {
        document.body.style.backgroundImage = "url('/wearther_photo/partly_cloudy1.jpg')"
      } else if (cond == "Light rain") {
        document.body.style.backgroundImage = "url('/wearther_photo/rain1.gif')"
      } else if (cond == "Mist") {
        document.body.style.backgroundImage = "url('/wearther_photo/mist.gif')"
      }

      //container 2

      document.getElementById("local_area").innerHTML = `<p>${data.location.name}, ${data.location.region}, ${data.location.country}</p>`;
      document.getElementById("local_time").innerHTML = `As of ${data.location.localtime}`;
      document.getElementById("temperature").innerHTML = `${data.current.feelslike_c} °C`;
      document.getElementById("condition").innerHTML = data.current.condition.text;
      document.getElementById("icon").src = `${data.current.condition.icon}`




      //container 3
      if (data.current.uv >= 0 && data.current.uv <= 2) {
        document.getElementById("uv").innerHTML = data.current.uv + "/10 Low";
      } else if (data.current.uv >= 3 && data.current.uv <= 5) {
        document.getElementById("uv").innerHTML = data.current.uv + "/10 Moderate";
      } else if (data.current.uv >= 6 && data.current.uv <= 7) {
        document.getElementById("uv").innerHTML = data.current.uv + "/10 High";
      } else if (data.current.uv >= 8 && data.current.uv <= 10) {
        document.getElementById("uv").innerHTML = data.current.uv + "/10 very High";
      }

      document.getElementById("sunrise").innerHTML = data.forecast.forecastday[0].astro.sunrise;
      document.getElementById("sunset").innerHTML = data.forecast.forecastday[0].astro.sunset;
      document.getElementById("wind").innerHTML = `${data.current.wind_kph} km/h`;
      document.getElementById("aqi").innerHTML = data.current.air_quality["us-epa-index"];
      document.getElementById("humidity").innerHTML = `${data.current.humidity} %`;
      document.getElementById("max_temp").innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}  °C`;
      document.getElementById("min_temp").innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}  °C`;



      //container 4
      // for(let i=1;i<25;i++){
      //   document.getElementById(`time${i}`).innerHTML = data.forecast.forecastday[0].hour[i-1].time;
      // }

      for (i = 1; i < 25; i++) {
        document.getElementById(`forcast_cond${i}`).innerHTML = data.forecast.forecastday[0].hour[i - 1].condition.text;
      }


      for (i = 1; i < 25; i++) {
        document.getElementById(`desc${i}`).innerHTML = data.forecast.forecastday[0].hour[i - 1].temp_c + " °C";
      }

      // document.getElementById("desc1").innerHTML = data.forecast.forecastday[0].hour[0].temp_c + "°C";
      // document.getElementById("desc2").innerHTML = data.forecast.forecastday[0].hour[1].temp_c + "°C";
      // document.getElementById("desc3").innerHTML = data.forecast.forecastday[0].hour[2].temp_c + "°C";
      // document.getElementById("desc4").innerHTML = data.forecast.forecastday[0].hour[3].temp_c + "°C";
      // document.getElementById("desc5").innerHTML = data.forecast.forecastday[0].hour[4].temp_c + "°C";
      // document.getElementById("desc6").innerHTML = data.forecast.forecastday[0].hour[5].temp_c + "°C";
      // document.getElementById("desc7").innerHTML = data.forecast.forecastday[0].hour[6].temp_c + "°C";
      // document.getElementById("desc8").innerHTML = data.forecast.forecastday[0].hour[7].temp_c + "°C";
      // document.getElementById("desc9").innerHTML = data.forecast.forecastday[0].hour[8].temp_c + "°C";
      // document.getElementById("desc10").innerHTML = data.forecast.forecastday[0].hour[9].temp_c + "°C";
      // document.getElementById("desc11").innerHTML = data.forecast.forecastday[0].hour[10].temp_c + "°C";
      // document.getElementById("desc12").innerHTML = data.forecast.forecastday[0].hour[11].temp_c + "°C";
      // document.getElementById("desc13").innerHTML = data.forecast.forecastday[0].hour[12].temp_c + "°C";
      // document.getElementById("desc14").innerHTML = data.forecast.forecastday[0].hour[13].temp_c + "°C";
      // document.getElementById("desc15").innerHTML = data.forecast.forecastday[0].hour[14].temp_c + "°C";
      // document.getElementById("desc16").innerHTML = data.forecast.forecastday[0].hour[15].temp_c + "°C";
      // document.getElementById("desc17").innerHTML = data.forecast.forecastday[0].hour[16].temp_c + "°C";
      // document.getElementById("desc18").innerHTML = data.forecast.forecastday[0].hour[17].temp_c + "°C";
      // document.getElementById("desc19").innerHTML = data.forecast.forecastday[0].hour[18].temp_c + "°C";
      // document.getElementById("desc20").innerHTML = data.forecast.forecastday[0].hour[19].temp_c + "°C";
      // document.getElementById("desc21").innerHTML = data.forecast.forecastday[0].hour[20].temp_c + "°C";
      // document.getElementById("desc22").innerHTML = data.forecast.forecastday[0].hour[21].temp_c + "°C";
      // document.getElementById("desc23").innerHTML = data.forecast.forecastday[0].hour[22].temp_c + "°C";
      // document.getElementById("desc24").innerHTML = data.forecast.forecastday[0].hour[23].temp_c + "°C";


      for (let j = 1; j < 25; j++) {
        document.getElementById(`icon${j}`).src = data.forecast.forecastday[0].hour[j - 1].condition.icon;
      }

      // document.getElementById("icon1").src = data.forecast.forecastday[0].hour[0].condition.icon;
      // document.getElementById("icon2").src = data.forecast.forecastday[0].hour[1].condition.icon;
      // document.getElementById("icon3").src = data.forecast.forecastday[0].hour[2].condition.icon;
      // document.getElementById("icon4").src = data.forecast.forecastday[0].hour[3].condition.icon;
      // document.getElementById("icon5").src = data.forecast.forecastday[0].hour[4].condition.icon;
      // document.getElementById("icon6").src = data.forecast.forecastday[0].hour[5].condition.icon;
      // document.getElementById("icon7").src = data.forecast.forecastday[0].hour[6].condition.icon;
      // document.getElementById("icon8").src = data.forecast.forecastday[0].hour[7].condition.icon;
      // document.getElementById("icon9").src = data.forecast.forecastday[0].hour[8].condition.icon;
      // document.getElementById("icon10").src = data.forecast.forecastday[0].hour[9].condition.icon;
      // document.getElementById("icon11").src = data.forecast.forecastday[0].hour[10].condition.icon;
      // document.getElementById("icon12").src = data.forecast.forecastday[0].hour[11].condition.icon;
      // document.getElementById("icon13").src = data.forecast.forecastday[0].hour[12].condition.icon;
      // document.getElementById("icon14").src = data.forecast.forecastday[0].hour[13].condition.icon;
      // document.getElementById("icon15").src = data.forecast.forecastday[0].hour[14].condition.icon;
      // document.getElementById("icon16").src = data.forecast.forecastday[0].hour[15].condition.icon;
      // document.getElementById("icon17").src = data.forecast.forecastday[0].hour[16].condition.icon;
      // document.getElementById("icon18").src = data.forecast.forecastday[0].hour[17].condition.icon;
      // document.getElementById("icon19").src = data.forecast.forecastday[0].hour[18].condition.icon;
      // document.getElementById("icon20").src = data.forecast.forecastday[0].hour[19].condition.icon;
      // document.getElementById("icon21").src = data.forecast.forecastday[0].hour[0].condition.icon;
      // document.getElementById("icon22").src = data.forecast.forecastday[0].hour[21].condition.icon;
      // document.getElementById("icon23").src = data.forecast.forecastday[0].hour[22].condition.icon;
      // document.getElementById("icon24").src = data.forecast.forecastday[0].hour[23].condition.icon;

      var country = data.location.name + " Weather";
      function getdata2() {
        url2 = `https://newsapi.org/v2/everything?q=${country}&from=2022-03-10&language=en&sortBy=publishedAt&apiKey=41f8fa5173d549b282db24b6a79f80f9`;
        fetch(url2).then((response) => {
          return response.json();
        }).then((data2) => {
          console.log(data2);


          //container 6

          for (i = 1; i < 6; i++) {
            document.getElementById(`news${i}`).innerHTML = `Title ${i} : ${data2.articles[i - 1].title}`;
            document.getElementById(`content${i}`).innerHTML = data2.articles[i - 1].content;
            document.getElementById(`description${i}`).innerHTML = data2.articles[i - 1].description;
            document.getElementById(`news_img${i}`).src = data2.articles[i - 1].urlToImage;
            document.getElementById(`source${i}`).innerHTML = `Source: ${data2.articles[i-1].source.name}`;
            result = `"<a href='${data2.articles[i-1].url}' target="_blank"> ${data2.articles[i-1].url} </a>"`;
            document.getElementById(`url${i}`).innerHTML = "Url: "+ result;
          }


        })






      }
      getdata2();




    })
  }
  get_data();


}


getdata();



function news_down_btn1() {
  document.getElementById('news_btn2').style.display = "none";
  document.getElementById('news_btn3').style.display = "none";
  document.getElementById('news_btn4').style.display = "none";
  document.getElementById('news_btn5').style.display = "none";
  var x = document.getElementById(`news_btn1`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function news_down_btn2() {

  document.getElementById('news_btn1').style.display = "none";
  document.getElementById('news_btn3').style.display = "none";
  document.getElementById('news_btn4').style.display = "none";
  document.getElementById('news_btn5').style.display = "none";
  var x = document.getElementById(`news_btn2`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function news_down_btn3() {
  document.getElementById('news_btn1').style.display = "none";
  document.getElementById('news_btn2').style.display = "none";
  document.getElementById('news_btn4').style.display = "none";
  document.getElementById('news_btn5').style.display = "none";
  var x = document.getElementById(`news_btn3`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function news_down_btn4() {

  document.getElementById('news_btn1').style.display = "none";
  document.getElementById('news_btn2').style.display = "none";
  document.getElementById('news_btn3').style.display = "none";
  document.getElementById('news_btn5').style.display = "none";
  var x = document.getElementById(`news_btn4`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function news_down_btn5() {
  document.getElementById('news_btn1').style.display = "none";
  document.getElementById('news_btn2').style.display = "none";
  document.getElementById('news_btn3').style.display = "none";
  document.getElementById('news_btn4').style.display = "none";
  var x = document.getElementById(`news_btn5`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
