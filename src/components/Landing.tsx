import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ANSH
              <br />
              <span>AGARWAL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <div className="landing-role landing-role-1">
                <span className="role-green">Frontend</span>
                <span className="role-white"> Developer</span>
              </div>
              <div className="landing-role landing-role-2">
                <span className="role-green">Backend</span>
                <span className="role-white"> Developer</span>
              </div>
              <div className="landing-role landing-role-3">
                <span className="role-green">Arduino</span>
                <span className="role-green">Project</span>
                <span className="role-white"> Developer</span>
              </div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
