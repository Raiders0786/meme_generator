import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <header
          style={{
            height: 310,
            width: "50%",
            backgroundColor: "purple",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG.png"
            alt="problem?"
            style={{
              height: 300,
              width: "50%",
              textAlign: "center",
              alignContent: "center",
            }}
          />

          <h1
            style={{
              display: "flex",
              top: 200,
              color: "orange",
              fontSize: 50,
              textAlign: "center",
              alignContent: "center",
            }}
          >
            Meme Generator
          </h1>
        </header>
        <br />
      </div>
    );
  }
}

export default Header;
