import "./styles.css";
import { useState, useNavigate, useEffect } from "react";
import AudioOn from "./Images/AudioOn.png";
import AudioOff from "./Images/AudioOff.png";
import SpikeSleeping from "./Images/SpikeSleeping.png";
import SpikeSlightlyAwake from "./Images/SpikeSlightlyAwake.png";
import SpikeAwake from "./Images/SpikeAwake.png";
import Clear from "./Images/sunny-day.png";
import cloud from "./Images/cloudy-day.png";
import rain from "./Images/raining.png";
import axios from "axios";

//Got help me why do I have to write this all on my own
//My entire group had a fight about contribution when we haven't even started
//This is the best I can do I'm really sorry

export default function App() {
  const [data, setData] = useState("");
  const [textInput, setTextInput] = useState("");
  const [player, setPlayer] = useState("1st Player");
  const [plyAmt, setAmt] = useState(0);
  const [playerList, setPlayerList] = useState([]);
  const url = "https://dog.ceo/api/breeds/image/random";
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  ("https://api.openweathermap.org/data/2.5/weather?lat=-6.26&lon=106.61&appid=9abb55c7788f6c06c8edff2665280af6");
  const [time, setTime] = useState(null);
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState("#C9FFF0");
  const [icon, setIcon] = useState(null);
  const [audio, setAudio] = useState(false);
  const [audioImage, setAudioImage] = useState("./Images/AudioOff.png");
}

useEffect(() => {}, []);

document.body.style.backgroundColor;
const passData = {
  image: data.message,
  playerAmount: plyAmt,
  weather: weather,
  background: background
};

function SomeComponent() {
  const navigate = useNavigate();

  const navigateAbout = () => {
    navigate("/about");
  };

  const navigateToGame = () => {
    if (plyAmt < 2) {
      alert("Not Enough Players!");
    } else {
      navigate("/Game", {
        state: passData
      });
    }
  };

  const handleClick = (event) => {
    getDog();
  };

  function handlePlayerList(event) {
    if (textInput === "") {
      alert("Enter Player Name!");
    } else {
      const arr = [...playerList, textInput];
      setPlayerList(arr);
      setAmt(plyAmt + 1);
    }
  }

  function handleCount() {
    if (textInput !== "") {
      setCount(count + 1);
    }
  }

  function handleChangeNumber(event) {
    if (textInput !== "") {
      var newNumCount = "";
      if (count === 1) {
        newNumCount = "Player 2";
      } else if (count === 2) {
        newNumCount = "Player 3";
      } else {
        newNumCount = 1 + count + "";
      }
      setPlayer(newNumCount);
      setTextInput("");
    }
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setTextInput(newValue);
  }

  function audioClick() {
    if (audio == true) {
      setAudio(false);
      setAudioImage(AudioOn);
      document.getElementById("audio");
    } else if (audio === false) {
      setAudio(true);
      setAudioImage(AudioOff);
      document.getElementById("audio");
    }
  }

  function getDog() {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getWeather() {
    axios
      .get(url2)
      .then((response) => {
        setWeather(response.data.weather);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getDogt();
    getWeather();

    const currentTime = new Date();
    setTime(currentTime);

    if (currentTime >= 6 && currentTime <= 11) {
      setBackground("#ADFD6E");
    } else if (currentTime >= 12 && currentTime <= 24) {
      setBackground("#F9C31C");
    } else {
      setBackground("#F97A1C");
    }
    if (weather == "Clear") {
      setIcon(Clear);
    } else if (weather == "Clouded") {
      setIcon(cloud);
    } else {
      setIcon(rain);
    }
  }, []);

  return (
    <div className="container-fluid">
      <audio id="audio">
        <source src={mainmenu} type="about">
          Your browser doesn't support this
        </source>
      </audio>
      <h2 className="display-4">Don't Take Spikes Bones!</h2>
      <img src={dog} alt="doggy" class="dog" />
      <hr />
      <img
        src={audioImage}
        alt="volMute"
        style={{ width: "3%" }}
        id="volume"
        onClick={audioClick}
      />
      <button
        type="button"
        class="btn btn-primary btn-sm"
        onClick={navigateAbout}
      >
        About Us
      </button>
    </div>
  );
}
