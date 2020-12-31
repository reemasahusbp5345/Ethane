import React from "react";
import styles from "./TalkToUs.module.css";

export default function TalkToUs() {
  return (
    <div className={styles.talk_to_us_wrapper} style={{ minHeight: "500px" }}>
      <div className={styles.all_features}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div
              style={{
                position: "relative",
                maxWidth: "50%",
                paddingRight: "15px",
                paddingLeft: "15px",
              }}
            >
              <div className={styles.outer_card} style={{ width: 538 }}>
                <div
                  className={styles.illustration1}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/bottom-call-to-action.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <span className={styles.headings}>
                  Get a demo of all fundraising features
                </span>
                <span className={styles.description}>
                  Connect with an expert for a one-on-one demonstration of how
                  Ketto can help you fundraise.
                </span>
                <button
                  className={styles.talk_to_us_btn}
                  style={{ width: "276px", height: "51px", margin: "0 auto" }}
                >
                  talk to us
                </button>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                maxWidth: "50%",
                paddinRight: "15px",
                paddingLeft: "15px",
              }}
            >
              <div className={styles.outer_card} style={{ width: 538 }}>
                <div
                  className={styles.illustration2}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/bottom-call-to-action.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <span className={styles.headings}>
                  Launch your next fundraiser in minutes
                </span>
                <span className={styles.description}>
                  Start your fundraiser on Ketto and be ready to get your first
                  donation in minutes.
                </span>
                <button
                  className={styles.start_fundraiser_btn}
                  style={{ width: "276px", height: "51px", margin: "0 auto" }}
                >
                  START A FUNDRAISER FOR FREE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
