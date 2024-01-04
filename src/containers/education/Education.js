import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";

import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {illustration} from "../../portfolio";
import {Fade} from "react-reveal";
import thinkingGirl from "../../assets/lottie/thinkingGirl";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <div className="education-main-div">
          <h1 className="education-heading">Education</h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {educationInfo.subTitle}
          </p>
          <Fade left duration={1000}>
            <div className="education-card-container">
              {educationInfo.schools.map((school, index) => (
                <EducationCard key={index} school={school} />
              ))}
            </div>
          </Fade>
        </div>
        <div className="education-main-div">
          <div className="education-card-container ">
            {illustration.animated ? (
              <DisplayLottie animationData={thinkingGirl} />
            ) : (
              <img
                alt="Woman Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
