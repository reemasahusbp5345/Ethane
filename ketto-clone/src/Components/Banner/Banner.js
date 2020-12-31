import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner_section}>
      <div className={styles.banner_img}>
        <img src="images/ketto_banner.png" alt="banner" />
      </div>
      <div className={styles.title_section}>
        <div className={styles.questions_title}>
          <h2
            style={{
              fontWeight: 700,
              color: "#444",
              marginBottom: "30px",
              fontSize: "36px",
              lineHeight: "45px",
            }}
          >
            Need Funds to Pay For a Medical Emergency or Social Cause?{" "}
          </h2>
          <div className={styles.raised_wrapper}>
            <div className={styles.inline_div}>
              <h3>₹1100 Crs+</h3>
              <span>Raised</span>
            </div>
            <div className={styles.inline_div}>
              <h3>55 Lakh+</h3>
              <span>Donors</span>
            </div>
            <div className={styles.inline_div}>
              <h3>2 Lakh+</h3>
              <span>Fundraisers</span>
            </div>
          </div>
          <div className={styles.startfundraiser_button}>
            <p className={styles.platform_fee}>
              Ketto’s
              <span>
                <span class={styles.font_s}>0</span>% Platform fees
              </span>
              ensures maximum funds for you
            </p>
            <button className={styles.start_fundraiser_btn}>
              <span className={styles.mat_button_wrapper}>
                Start a Fundraiser for FREE
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.urgent_wrapper}>
        <div className={styles.urgent_card}>
          <div>
            <img src="images/urgent_card_img.jpg" alt="" />
          </div>
          <div class={styles.content_area}>
            <div class={styles.ribbon_bg}> featured fundraiser </div>
            <h2> Build with Santa Campaign 2020 </h2>
            <p>
              By habitat for humanity - Driven by the vision that everyone needs
              a decent place to live.
            </p>
            <div class={styles.button}>
              <a class={styles.donate_btn} href="/test.js">
                <span class={styles.mat_button_wrapper}>
                  Donate Now <i class="material-icons"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
