import React, { Component } from "react";
import Meme from "../../components/Meme/Meme";
import MemeText from "../../components/MemeText/MemeText";
import axios from "axios";
import html2canvas from "html2canvas";
import classes from "./Creator.module.css";


class Creator extends Component {
  state = {
    image: "",
    textTop: "TOP TEXT",
    textBottom: "BOTTOM TEXT",
    textSizeTop: "32",
    textSizeBottom: "32",
    textColorTop: "white",
    textColorBottom: "white",
    textFont: ""
  };

  onTextChangeTop = (event) => {
    this.setState({ textTop: event.target.value });
  };

  onTextChangeBottom = (event) => {
    this.setState({ textBottom: event.target.value });
  };

  onIncreaseFontTop = () => {
    if (this.state.textSizeTop === "64") {
      return;
    }
    this.setState({
      textSizeTop: (parseInt(this.state.textSizeTop) + 2).toString()
    });
  };

  onDecreaseFontTop = () => {
    if (this.state.textSizeTop === "12") {
      return;
    }
    this.setState({
      textSizeTop: (parseInt(this.state.textSizeTop) - 2).toString()
    });
  };

  onIncreaseFontBottom = () => {
    if (this.state.textSizeBottom === "64") {
      return;
    }
    this.setState({
      textSizeBottom: (parseInt(this.state.textSizeBottom) + 2).toString()
    });
  };

  onDecreaseFontBottom = () => {
    if (this.state.textSizeBottom === "12") {
      return;
    }
    this.setState({
      textSizeBottom: (parseInt(this.state.textSizeBottom) - 2).toString()
    });
  };

  onTextColorChangeTop = (color) => {
    this.setState({
      textColorTop: color
    });
  };

  onTextColorChangeBottom = (color) => {
    this.setState({
      textColorBottom: color
    });
  };

  onImageUpload = (event) => {
    event.preventDefault();
    const uploadedImgFile = event.target.files[0];
    this.setState({ image: URL.createObjectURL(uploadedImgFile) });
  };

  onDownloadMeme = () => {
    if (this.state.image === "") {
      alert("Please upload an image.");
      return;
    }
    html2canvas(document.getElementById("memeImage"), {
      allowTaint: true,
      backgroundColor: null
    }).then((canvas) => {
      document.body.appendChild(canvas);
      var img = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      window.location.href = img;
      canvas.remove();
    });
  };

  render() {
    return (
      <div className={classes.MemeContainer}>
        <div className={classes.MemeInfoFull}>
          <div className={classes.MemeImage}>
            <Meme
              memeImage={this.state.image}
              topText={this.state.textTop}
              bottomText={this.state.textBottom}
              colorTextTop={this.state.textColorTop}
              colorTextBottom={this.state.textColorBottom}
              sizeTextTop={this.state.textSizeTop}
              sizeTextBottom={this.state.textSizeBottom}
            />
          </div>
          <div className={classes.MemeMaker}>
            <div className={classes.MemeUpload}>
              <div className={classes.Upload}>
                <label htmlFor="uploadedImg" title="Upload Image">
                  <i className="fas fa-upload fa-lg"></i>
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="uploadedImg"
                  id="uploadedImg"
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={(event) => this.onImageUpload(event)}
                />
              </div>
            </div>
            <MemeText
              placeholder="Top Text"
              id="top"
              updateTextTop={this.onTextChangeTop}
              increaseFontTop={this.onIncreaseFontTop}
              decreaseFontTop={this.onDecreaseFontTop}
              updateColorTextTop={this.onTextColorChangeTop}
            />
            <MemeText
              placeholder="Bottom Text"
              id="bottom"
              updateTextBottom={this.onTextChangeBottom}
              increaseFontBottom={this.onIncreaseFontBottom}
              decreaseFontBottom={this.onDecreaseFontBottom}
              updateColorTextBottom={this.onTextColorChangeBottom}
            />
            <div className={classes.Download}>
              <button
                className={classes.DownloadBtn}
                onClick={this.onDownloadMeme}
              >
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Creator;
