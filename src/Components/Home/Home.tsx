import React from "react";
import "./Home.css";
import Group1 from "../../assets/img/Group 1.png";
function Home() {
  return (
    <div className="home">
      <div className="text">
        <h1>
          Hi,I`m
          <br />
          <span style={{ fontWeight: "800" }}>Ali Gasimzade</span>
          <br /> 
          I`m a <span style={{ color: "#22CCFF" }}> Full-Stack Engineer</span>
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="download">Download CV</button>
      </div>
      <div className="img">
        <img className="group1" src={Group1}></img>
      </div>
      {/* afdafa */}
    </div>
  );
}

export default Home;
