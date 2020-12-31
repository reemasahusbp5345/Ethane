import React from "react";
import styles from "./SuccessStoriesBox.module.css";

export default function SuccessStoriesBox4() {
  return (
    <div className={`${styles.success_stories_box} ${styles.current_slide}`}>
      <div className={styles.story_image}>
        <img src="images/InternetAccess.jpg" alt="" />
      </div>
      <div className={styles.story_content}>
        <h2>How Surya Brought Internet Access To Ghazipur</h2>
        <p className={styles.content}>
          Surya has started a fundraiser on Ketto called “Help Build A Public
          Library For Ghazipur's Kids“ hoping to raise an amount of Rs 4,00,000
          to build a public library to supplement the school. The library, the
          first in the district, will educate communities on a wide range of
          topics and will be equipped with diverse resources from computers and
          the Internet to books and qualified teachers...
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
