import "./Main.scss";
import { useState } from "react";

const Main = () => {
  const [img, setImg] = useState(false);

  const showImg = () => {
    if (window.innerWidth > 800) {
      setImg(false);
    } else {
      setImg(true);
    }
  };

  window.addEventListener("resize", showImg);

  return (
    <section className="main">
      <div className="main-image">
        <img className="mockup" src="./images/image-mockups.png" alt="mockup" />
        <img
          src={
            img
              ? "./images/bg-intro-mobile.svg"
              : "./images/bg-intro-desktop.svg"
          }
          alt="intro"
          className="pattern"
        />
      </div>

      <div className="content">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="invite">
          <button className="btn-invite">Request Invite</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
