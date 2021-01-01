import React from "react";
import "./FollowTheseSimpleSteps.css";
import { FaWhatsapp } from "react-icons/fa";

function Demo() {
  return (
    <div className="container">
      <svg
        class="d-none d-lg-block"
        fill="none"
        height="410"
        viewBox="0 0 360 410"
        width="360"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          _ngcontent-my-app-c6=""
          clip-rule="evenodd"
          d="M-7.37723 390.259C155.71 390.259 355 459.737 355 297.017C355 134.297 170.758 5 7.67014 5C-155.417 5 -331 134.297 -331 297.017C-331 459.737 -170.465 390.259 -7.37723 390.259Z"
          fill="url(#paint0_linear)"
          fill-rule="evenodd"
          opacity="0.07"
          stroke="url(#paint1_linear)"
          stroke-width="9"
        ></path>
        <defs _ngcontent-my-app-c6="">
          <linearGradient
            _ngcontent-my-app-c6=""
            gradientUnits="userSpaceOnUse"
            id="paint0_linear"
            x1="-677.43"
            x2="-320.621"
            y1="209"
            y2="814.928"
          >
            <stop _ngcontent-my-app-c6="" stop-color="#3023AE"></stop>
            <stop
              _ngcontent-my-app-c6=""
              offset="1"
              stop-color="#C86DD7"
            ></stop>
          </linearGradient>
          <linearGradient
            _ngcontent-my-app-c6=""
            gradientUnits="userSpaceOnUse"
            id="paint1_linear"
            x1="-677.43"
            x2="-320.621"
            y1="209"
            y2="814.928"
          >
            <stop _ngcontent-my-app-c6="" stop-color="#3023AE"></stop>
            <stop
              _ngcontent-my-app-c6=""
              offset="1"
              stop-color="#C86DD7"
            ></stop>
          </linearGradient>
        </defs>
      </svg>
      <h2>Follow these simple steps and start raising in a few minutes.</h2>
      <div className="demo-container">
        <div className="img">
          <img
            src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?w=100&dpr=1.3"
            height="500px"
          />
        </div>
        <div className="steps">
          <div id="step1">
            <h3>Start your fundraiser</h3>
            <h6>
              It’ll take only 2 minutes. Just tell us a few details about you
              and the ones you are raising funds for.
            </h6>
          </div>
          <div className="step2">
            <h3>Share your fundraiser</h3>
            <h6>
              All you need to do is share the fundraiser with your friends and
              family. In no time, support will start pouring in.
            </h6>
          </div>
          <div className="step3">
            <h3>Withdraw Funds</h3>
            <h6>
              The funds raised can be withdrawn without any hassle directly to
              your bank account.
            </h6>
          </div>
        </div>
        <div className="video">
          <video className="videoTag" autoPlay loop muted>
            <source
              src="https://d1vdjc70h9nzd9.cloudfront.net/videos/screen_recording.webm"
              type="video/mp4"
              width="150px"
            />
          </video>
        </div>
      </div>
      <div className="buttons">
        <button className="buttons-btn1">START A FUNDRAISER FOR FREE</button>
        <button className="buttons-btn2">TALK TO US</button>
      </div>
      <div className="chat">
        <h5>Have any questions for us? Chat with our team on WhatsApp Now</h5>
        <div>
          <button type="button" className="form-btn-2">
            <div>
              <FaWhatsapp />
            </div>
            <div>Chat (+91 7700975559)</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Demo;
