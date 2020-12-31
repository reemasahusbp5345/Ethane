import React from "react";
import styles from "./SuccessStoriesBox.module.css";

export default function SuccessStoriesBox3() {
  return (
    <div className={`${styles.success_stories_box} ${styles.current_slide}`}>
      <div className={styles.story_image}>
        <img src="images/Viraat.jpg" alt="" />
      </div>
      <div className={styles.story_content}>
        <h2>How 6 year old Viraat overcame Cerebral Palsy</h2>
        <p className={styles.content}>
          Viraat was diagnosed with Cerebral Palsy since birth. His parents
          started a fundraiser on Ketto to manage his therapy expenses as it is
          a prolonged and expensive procedure. Little did they know that their
          fundraiser would get such a tremendous response. With the help of your
          timely contributions, 6-year old Viraat is undergoing treatment in USA
          and learning to be more independent. You Made this Possible, Thank
          You!
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
