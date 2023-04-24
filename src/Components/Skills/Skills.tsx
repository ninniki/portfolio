import image2 from "../../assets/img/image 2.png";
import image3 from "../../assets/img/image 3.png";
import image4 from "../../assets/img/image 4.png";
import image5 from "../../assets/img/image 5.png";
import image6 from "../../assets/img/image 6.png";
import image7 from "../../assets/img/image 7.png";
import group2 from "../../assets/img/LooperGroup2.png"
import "./Skills.css"
export const Skills = () => {
  return (
    <>
    <section className="skill" id="skills">
    <h1>SKILLS</h1>
      <div className="container">
        <div className="box_skills">
          <img src={image2} />
          <p>
            NEST
            <br />
            90%
          </p>
        </div>
        <div className="box_skills">
          <img src={image3} />
          <p>
            JAVASCRIPT
            <br />
            100%
          </p>
        </div>
        <div className="box_skills">
          <img src={image4} />
          <p>
            REACT
            <br />
            100%
          </p>
        </div>
        <div className="box_skills">
          <img style={{ width: "250px", height: "250px" }} src={image5} />
          <p>
            SERVICES
            <br />
            70%
          </p>
        </div>
        <div className="box_skills">
          <img src={image6} />
          <p>
            SERVICES
            <br />
            100%
          </p>
        </div>
        <div className="box_skills">
          <img src={image7} />
          <p>
            TYPESCRIPT
            <br />
            100%
          </p>
        </div>
      </div>
    </section></>
  );
};
