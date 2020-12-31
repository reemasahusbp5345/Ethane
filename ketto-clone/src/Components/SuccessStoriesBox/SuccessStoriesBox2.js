import React from "react";
import styles from "./SuccessStoriesBox.module.css";

export default function SuccessStoriesBox2() {
  return (
    <div className={`${styles.success_stories_box} ${styles.current_slide}`}>
      <div className={styles.story_image}>
        <img src="images/ChennaiChildrens.png" alt="" />
      </div>
      <div className={styles.story_content}>
        <h2>Amit and the world’s toughest cycling expedition</h2>
        <p className={styles.content}>
          At 38, Dr. Amit Samarth is the first Asian to qualify, contest and
          complete the Trans-Siberian Extreme Endurance Race. It is the world's
          longest and the toughest cycling race - starting from Moscow,
          traversing 9100 kms through Russia, to finally end in Vladivostok.
          Amit was one of the only six people who finished the race. He
          successfully raised the amount needed for this once in a lifetime
          adventure on Ketto, where
        </p>
        <div className={styles.read_more}>
          <a href="/test.js">Read more</a>
        </div>
        <div className={styles.whatsapp_cta}>
          <p>
            Subscribe to read such inspiring stories
            <a className={styles.whatsapp_btn} href="">
              <span className={styles.icon_whatsapp}></span>Subscribe
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
