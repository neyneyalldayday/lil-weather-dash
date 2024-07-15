function search(city) {
    fetch(
      // Current forecast query URL
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (data) {
        console.log(data.weather[0].icon, "here")

        //use the data to append incoming stuff to the html

        // you get the lattitude and logitude fromt the first fetch and throw it in 
        //the second one

        //ex:
        // const lat = data.lat
        // const lon = data.lon

        fetch(
            //Query for 5 day forecast
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (weekResponse) {
              console.log(weekResponse, "suckla")
            }); 
                // use console.log() weekResponse Data to make your five day cards. 
                // you need to narrow down the data to one time per day ex 12:00:00
                // to clean up the data from like 40 things to 5
      })}

      searchBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // make sure to connect your input here
        var city ="--------------->" + whateveryourinputelementiscalled.value.trim()
        search(city);
       searchInput.value = "";
        
      });