import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Your vote counts, vote!</div>
      <p></p><p></p>
      <div className="download">
          <img src="download.png" />
        </div>
        <p></p><p></p>
      <div className="title-small">
      5 Reasons Why You Should Vote!
      </div>
        <div><p>1. Elections have consequences. Every vote matters.</p>
        <p>2. It's your right. Not voting is giving up your voice.</p>
        <p>3. It's your money.</p>
        <p>4. Voting is an opportunity for change.</p>
        <p>5. The community depends on you!</p>
        </div>

      <div className="mobile-wrapper">
      </div>
    </div>
  );
};

export default Features;
