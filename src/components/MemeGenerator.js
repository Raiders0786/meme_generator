import React, { Component } from "react";
class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      imageUrl: "https://i.imgflip.com/4gobv5.jpg",
      allMemesImg: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemesImg: memes });
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemesImg.length); // for generating different Images for memes when submit button is triggered
    const randomUrl = this.state.allMemesImg[randNum].url;
    this.setState({ imageUrl: randomUrl });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Text to be Displayed on the Top "
            style={{ width: 300 }}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Text to be Displayed on the Bottom"
            style={{ width: 300 }}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button className="Submit">Click To Generate</button>
        </form>
        <br />
        <div className="container">
          <img src={this.state.imageUrl} alt="" />
          <br />
          <h2 className="Top">{this.state.topText}</h2>

          <h2 className="Bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
