function getGeolocation() {
  const apiKey = "b8b30311c4ca9106fcad773a76f50cfd";

  fetch(`http://api.ipstack.com/check?access_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const countryName = data.country_name;

      sessionStorage.setItem("countryName", countryName);

      document.getElementById("country").textContent = countryName;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Call the geolocation function
getGeolocation();
