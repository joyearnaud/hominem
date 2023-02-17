<template>
  <div class="weather-container">
    <div v-if="iconUrl" class="weather-icon">
      <img :src="iconUrl" :alt="weather" />
      <p>{{ weather }}</p>
    </div>
    <div v-if="temperature" class="temperature">
      <p>{{ temperature }}&deg;C</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: null,
      weather: null,
      iconUrl: null,
    };
  },
  created() {
    this.getCurrentLocation();
  },
  methods: {
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.getWeatherData(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    getWeatherData(latitude, longitude) {
      const apiKey = "your-api-key-here";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
        .then((response) => {
          if (response.status === 401) {
            throw new Error("Unauthorized API key.");
          }
          if (response.status === 403) {
            throw new Error("Forbidden API key.");
          }
          if (!response.ok) {
            throw new Error("Unable to get weather data.");
          }
          return response.json();
        })
        .then((data) => {
          this.temperature = data.main.temp;
          this.weather = data.weather[0].description;
          this.iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          this.errorMessage = null;
        })
        .catch((error) => {
          this.temperature = null;
          this.weather = null;
          this.iconUrl = null;
          this.errorMessage = error.message;
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.weather-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.weather-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.temperature {
  font-size: 3rem;
  font-weight: bold;
}
</style>
