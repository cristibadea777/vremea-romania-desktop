export function getWeatherDescription(desc, main) {
  switch (desc) {
    case "clear sky":
      return {
        descriere: "Cer senin",
        imagine: "https://i.imgur.com/ZYAkWby.png",
      };

    case "few clouds":
      return {
        descriere: "Puțini nori",
        imagine: "https://i.imgur.com/7i6QUQV.png",
      };

    case "scattered clouds":
      return {
        descriere: "Parțial noros",
        imagine: "https://i.imgur.com/eL30XFd.png",
      };

    case "broken clouds":
      return {
        descriere: "Înnorat",
        imagine: "https://i.imgur.com/s0wfNIT.png",
      };

    case "shower rain":
      return {
        descriere: "Rafale de ploaie",
        imagine: "https://i.imgur.com/icyeqVa.png",
      };

    case "rain":
      return {
        descriere: "Ploaie",
        imagine: "https://i.imgur.com/WygJ7Is.png",
      };

    case "thunderstorm":
      return {
        descriere: "Furtună",
        imagine: "https://i.imgur.com/BHA3GBb.png",
      };

    case "snow":
      return {
        descriere: "Ninsoare",
        imagine: "https://i.imgur.com/cTOfRM4.png",
      };

    case "mist":
      return {
        descriere: "Ceață",
        imagine: "https://i.imgur.com/7M4Y494.png",
      };

    default:
      switch (main) {
        case "Thunderstorm":
          return {
            descriere: "Furtună",
            imagine: "https://i.imgur.com/BHA3GBb.png",
          };

        case "Drizzle":
          return {
            descriere: "Burniță",
            imagine: "https://i.imgur.com/88ND4tV.png",
          };

        case "Clouds":
          return {
            descriere: "Înnorat",
            imagine: "https://i.imgur.com/wgQi6BV.png",
          };

        case "Rain":
          return {
            descriere: "Ploaie",
            imagine: "https://i.imgur.com/WygJ7Is.png",
          };

        case "Snow":
          return {
            descriere: "Ninsoare",
            imagine: "https://i.imgur.com/cTOfRM4.png",
          };

        case "Mist":
        case "Smoke":
        case "Haze":
        case "Fog":
          return {
            descriere: "Încețoșat",
            imagine: "https://i.imgur.com/7M4Y494.png",
          };

        default:
          return {
            descriere: "",
            imagine: "",
          };
      }
  }
}