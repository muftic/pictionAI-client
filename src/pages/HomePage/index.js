import React from "react";
import PictionAI from "../PictionAI";
import * as ml5 from "ml5";
import { useState } from "react";
import { useEffect } from "react";
import { fetchSubs } from "../../store/submissions/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectChallenges } from "../../store/challenges/selectors";
// When the model is loaded
const classifier = ml5.imageClassifier("MobileNet", modelLoaded);
let image = document.getElementById(`23`);
function modelLoaded() {
  console.log("Model Loaded!");
  if (image === null) {
    image = document.getElementById(`23`); //oyvey
  }
}

export default function HomePage() {
  const [taskOption, setTaskOption] = useState(null);

  const challenges = useSelector(selectChallenges);
  return (
    <div class="main">
      <h1>Welcome to PictionAI</h1>
      <div class="about">
        <p>
          PictionAI is a simple game made to showcase the{" "}
          <a href="https://ml5js.org/">ml5</a>
          language with{" "}
          <a href="https://github.com/onnx/models/tree/master/vision/classification/mobilenet">
            MobileNet
          </a>
          's pre-trained model. The idea of the game is for to draw a selected
          task, upload the drawing to the app, and receive a score based on the
          app's confidence. The points don't really matter, but it's really cool
          how it works.
        </p>

        <select name="task" value={taskOption}>
          {challenges.map((e, key) => {
            return (
              <option key={key} value={e.value}>
                {e.name}
              </option>
            );
          })}
        </select>
        <p>Pick a challenge!</p>
      </div>
      <PictionAI />
    </div>
  );
}
