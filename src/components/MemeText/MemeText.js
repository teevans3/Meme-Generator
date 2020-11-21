import React from "react";
import classes from "./MemeText.module.css";

const colorsList = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "brown",
  "white",
  "gray",
  "black"
];

const MemeText = (props) => {
  const colorsListDisplay = colorsList.map((color) => {
    return (
      <div
        key={color}
        className={classes.ColorPickerBox}
        style={{ backgroundColor: color }}
        title={color}
        onClick={
          props.id === "top"
            ? () => props.updateColorTextTop(color)
            : () => props.updateColorTextBottom(color)
        }
      ></div>
    );
  });

  return (
    <div className={classes.MemeText}>
      <div className={classes.MemeTextLeft}>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={
            props.id === "top" ? props.updateTextTop : props.updateTextBottom
          }
        />
        <div className={classes.ColorPicker}>{colorsListDisplay}</div>
      </div>
      <div className={classes.MemeTextRight}>
        <button
          title="Increase Font Size"
          className={classes.BiggerBtn}
          onClick={
            props.id === "top"
              ? props.increaseFontTop
              : props.increaseFontBottom
          }
        >
          <span style={{ fontSize: "22px" }}>
            A<i className="fa fa-arrow-up fa-xs"></i>
          </span>
        </button>
        <button
          title="Decrease Font Size"
          className={classes.SmallerBtn}
          onClick={
            props.id === "top"
              ? props.decreaseFontTop
              : props.decreaseFontBottom
          }
        >
          <span style={{ fontSize: "22px" }}>
            {" "}
            A<i className="fa fa-arrow-down fa-xs"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default MemeText;
