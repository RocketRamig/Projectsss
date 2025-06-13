import App from "../components/App.js";

export default function HomePage() {
  return (
    <>
      <div className="Flex">
        <App
          Title={{
            text: "i made a slider that you can click through and it will display different qoutes",
            img: "Slider.jpg",
            src: "/slider",
          }}
        />
        <App
          Title={{
            text: "i made a sticky navbar that changes its color when it reaches a certain point",
            img: "stickNavbar.jpg",
            src: "/stickyNavbar",
          }}
        />
        <App
          Title={{
            text: "Calculator",
            img: "calculator.jpg",
            src: "/calculator",
          }}
        />
        <App
          Title={{
            text: "Conways game of life",
            img: "Website.png",
            src: "/cgol",
          }}
        />
        <App
          Title={{
            text: "character counter",
            img: "CharacterCounter.jpg",
            src: "/charactercounter",
          }}
        />
        <App
          Title={{
            text: "random password",
            img: "randomerpassword.JPG",
            src: "/randompassword",
          }}
        />
        <App
          Title={{
            text: "Weather App",
            img: "WeatherApp.jpg",
            src: "/weatherapp",
          }}
        />
        <App
          Title={{
            text: "random password",
            img: "ranomerpassword.JPG",
            src: "/randompassword",
          }}
        />
        <App
          Title={{
            text: "random password",
            img: "ButtonCLick.jpg",
            src: "/randompassword",
          }}
        />
        <App
          Title={{
            text: "random password",
            img: "ButtonCLick.jpg",
            src: "/randompassword",
          }}
        />
      </div>
    </>
  );
}
