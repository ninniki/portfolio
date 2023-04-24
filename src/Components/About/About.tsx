import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <section id="about" >
        <h1 className="abt">ABOUT</h1>
        <br/>
        <div className="box">
        <div className="about">
          <div className="bio">
            <h1>BIOGRAPHY</h1>
            <p>
              Work for money and design for love! I'm Ali, a full-stack engineer
              based in Azerbaijan
            </p>
          </div>
          <div className="cntc">
            <h1>CONTACT</h1>
            <p>
              Baku, Azerbaijan
              <br />
              gasimzadeali@gmail.com
              <br />
              +994 55 699 60 30
            </p>
          </div>
          <div className="srvc">
            <h1>SERVICES</h1>
            <p>
              Back-end development
              <br />
              Web & Mobile Development
              <br />
              Application Development
            </p>
          </div>
        </div>
        <div className="about">
          <div className="edu">
            <h1>EDUCATION</h1>
            <p>
              2017 - current
              <br />
              <span> Bachelors of Science in Computer Science</span>
              <br />
              ADA University, Baku Azerbaijan
            </p>
            <br />
            <p>
              <span>
                Bachelors of Science in Computer Science (Exchange Semester)
              </span>
              <br />
              University for Information Science and Technology, Ohrid Macedonia
            </p>
            <br />
            <p>
              <span>
                Bachelors of Science in Applied Mathematics (Second Degree)
              </span>
              <br />
              Baku State University, Baku Azerbaijan{" "}
            </p>
          </div>

          <div className="exp">
            <h1>EXPERIENCE</h1>
            <p>
              2017 - 2021
              <br />
              <span> Webmaster / Front-end Developer</span>
              <br />
              ESN Azerbaijan
            </p>
            <br />
            <p>
              <span>Full-stack Developer</span>
              <br />
              Azmo Solutions LLC
            </p>
            <br />
            <p>
              <span>Front-end Developer</span>
              <br />
              Optima Business Solutions LLC
            </p>
            <br />
            <p>
              2022 - current
              <br />
              <span>Front-end Developer</span>
              <br />
              Teqqed
            </p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
