import React from "react";
import classes from "./Meme.module.css";

const Memes = (props) => {
  let memeBackgroundImage =
    "repeating-linear-gradient( 45deg, #111f28, #111f28 20px, #76879c 20px, #465298 40px)";
  if (props.memeImage !== "") {
    memeBackgroundImage = `url(${props.memeImage})`;
  }
  return (
    <a download="myMeme" download>
      <div
        id="memeImage"
        className={classes.Meme}
        style={{
          backgroundImage: memeBackgroundImage
        }}
      >
        <div
          className={classes.MemeTopText}
          style={{
            fontSize: props.sizeTextTop + "px",
            color: props.colorTextTop
          }}
        >
          {props.topText}
        </div>
        <div
          className={classes.MemeBottomText}
          style={{
            fontSize: props.sizeTextBottom + "px",
            color: props.colorTextBottom
          }}
        >
          {props.bottomText}
        </div>
      </div>
    </a>
  );
};

export default Memes;
