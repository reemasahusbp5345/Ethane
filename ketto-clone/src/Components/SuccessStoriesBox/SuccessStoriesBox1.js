import React from "react";
import styles from "./SuccessStoriesBox.module.css";

export default function SuccessStoriesBox1() {
  return (
    <div className={`${styles.success_stories_box} ${styles.current_slide}`}>
      <div className={styles.story_image}>
        <img src="images/AmitCyclist.jpg" alt="" />
      </div>
      <div className={styles.story_content}>
        <h2>Amit and the world’s toughest cycling expedition</h2>
        <p className={styles.content}>
          The Chennai Children's Choir comprises of visually impaired and
          special needs kids who beautifully express themselves through singing.
          In June 2018, they were presented with an opportunity to partake in
          the Serenade Choral Festival in USA. Touched by their crowdfunding
          campaign, 423 supporters from all over the world donated Rs 35,95,600
          so these beautiful souls could get an opportunity to serenade a live
          audience.
        </p>
        <div className={styles.read_more}>
          <a href="https://www.google.com/">Read more</a>
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
