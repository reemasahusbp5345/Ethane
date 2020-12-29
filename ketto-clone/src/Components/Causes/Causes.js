import React from "react";
import styles from "./Causes.module.css";

export default function Causes() {
  return (
    <div className={styles.causes_bg} style={{ marginTop: 100 }}>
      <div style={{ minHeight: "500px" }}>
        <div className={styles.causes_section}>
          <div className={styles.top_heading}>
            <h2>Causes you can raise funds for</h2>
            <p>
              Be it for a personal need, social cause or a creative idea - you
              can count on us for <br />
              the project that you want to raise funds for.
            </p>
          </div>
          <div className={styles.container}>
            <div className={styles.cause_list_row}>
              <div className={styles.cause}>
                <div
                  className={`${styles.cancer_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Cancer</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.acci_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Accident</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.liver_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Liver Cirrhosis</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.heart_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Heart Disease</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.kidney_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Kidney Failure</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.child_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Child Health</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.brain_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Brain Injury</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.lung_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Lung Disease</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.rare_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Rare Disease</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.animals_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Animals</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.memorial_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Memorial</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
              <div className={styles.cause}>
                <div
                  className={`${styles.others_cause} ${styles.background_img}`}
                  style={{
                    backgroundImage: `url(
                    	  "https://ketto.gumlet.io/assets/images/homepage/causes-sprite-new.png?w=auto&dpr=1.0"
                    )`,
                  }}
                >
                  <span>Others</span>
                  <div className={styles.learn_more}> Learn More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        _ngcontent-my-app-c6=""
        fill="none"
        height="308"
        viewBox="0 0 240 308"
        width="240"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          _ngcontent-my-app-c6=""
          clip-rule="evenodd"
          d="M220 5C338.741 5 435 101.532 435 220.611C435 339.69 416.64 294.643 297.899 294.643C179.158 294.643 5 339.69 5 220.611C5 101.532 101.259 5 220 5Z"
          fill="url(#paint0_linear)"
          fill-rule="evenodd"
          opacity="0.1"
          stroke="url(#paint1_linear)"
          stroke-width="9"
        ></path>
        <defs _ngcontent-my-app-c6="">
          <linearGradient
            _ngcontent-my-app-c6=""
            gradientUnits="userSpaceOnUse"
            id="paint0_linear"
            x1="5"
            x2="5"
            y1="303"
            y2="5"
          >
            <stop _ngcontent-my-app-c6="" stop-color="#FAD961"></stop>
            <stop
              _ngcontent-my-app-c6=""
              offset="1"
              stop-color="#F76B1C"
            ></stop>
          </linearGradient>
          <linearGradient
            _ngcontent-my-app-c6=""
            gradientUnits="userSpaceOnUse"
            id="paint1_linear"
            x1="5"
            x2="5"
            y1="303"
            y2="5"
          >
            <stop _ngcontent-my-app-c6="" stop-color="#FAD961"></stop>
            <stop
              _ngcontent-my-app-c6=""
              offset="1"
              stop-color="#F76B1C"
            ></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
