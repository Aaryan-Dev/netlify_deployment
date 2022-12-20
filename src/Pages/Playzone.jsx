import React from "react";
import "../App.css";
import Keyboard from "react-simple-keyboard";
import { useRef, useState } from "react";
import "react-simple-keyboard/build/css/index.css";
import { useEffect } from "react";

function Playzone() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const [random, setRandom] = useState("");

  useEffect(() => {
    getDiff_data();
  }, []);

  const getDiff_data = () => {
    fetch("https://wordgame-b043.onrender.com/playzone", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("playtoken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);

        setRandom(res.random);
      });
  };

  const onChange = (input) => {
    if (input === random) {
      console.log("done");
      setInput("");
      getDiff_data();
    } else {
      setInput(input);
      console.log("Input changed", input);
    }
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;

    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div className="App">
      <div className="captcha">
        <label className="lablee" htmlFor="wordbox-1">
          {`${random}`}
        </label>

        <input
          id="wordbox"
          className="inputin"
          value={input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={onChangeInput}
        />
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
}

export default Playzone;
