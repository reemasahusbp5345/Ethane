import React from "react";
import styles from "./WhatWeOffer.module.css";

export default function WhatWeOffer() {
  return (
    <div className={styles.whatweoffer_bg}>
      <div style={{ minHeight: "500px" }}>
        <section className={styles.why_ketto}>
          <div className={styles.container}>
            <h2>Why Ketto?</h2>
            <div className={styles.row}>
              <div>
                <div
                  className={styles.crowd1}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/why_ketto_sprite.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <div className={styles.content_area}>
                  <span className={styles.text}>
                    Industry’s best fundraising success rate
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={styles.crowd2}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/why_ketto_sprite.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <div className={styles.content_area}>
                  <span className={styles.text}>
                    Supported By 55,00,000+ Donors
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={styles.crowd3}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/why_ketto_sprite.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <div className={styles.content_area}>
                  <span className={styles.text}>
                    Easy-To-Manage Tools To Boost Results
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={styles.crowd4}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/why_ketto_sprite.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <div className={styles.content_area}>
                  <span className={styles.text}>
                    Receive donations via all popular payment modes
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={styles.crowd5}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/why_ketto_sprite.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <div className={styles.content_area}>
                  <span className={styles.text}>Get Expert Support 24/7</span>
                </div>
              </div>
              <div>
                <div
                  className={styles.crowd6}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/why_ketto_sprite.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <div className={styles.content_area}>
                  <span className={styles.text}>
                    A Dedicated Smart-Dashboard
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={styles.crowd7}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/why_ketto_sprite.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <div className={styles.content_area}>
                  <span className={styles.text}>
                    Withdraw Funds Without Hassle
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={styles.crowd8}
                  style={{
                    backgroundImage: `url("https://ketto.gumlet.io/assets/images/homepage/why_ketto_sprite.png?w=auto&dpr=1.0")`,
                  }}
                ></div>
                <div className={styles.content_area}>
                  <span className={styles.text}>
                    International Payment Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
