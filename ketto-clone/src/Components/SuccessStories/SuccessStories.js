import React from "react";
import styles from "./SuccessStories.module.css";
import SuccessStoriesBox1 from "../SuccessStoriesBox/SuccessStoriesBox1";
import SuccessStoriesBox2 from "../SuccessStoriesBox/SuccessStoriesBox2";
import SuccessStoriesBox3 from "../SuccessStoriesBox/SuccessStoriesBox3";
import SuccessStoriesBox4 from "../SuccessStoriesBox/SuccessStoriesBox4";

export default function SuccessStories() {
  return (
    <div className={styles.success_stories}>
      <div className={styles.container}>
        <div className={styles.top_heading}>
          <h2>Success Stories</h2>
        </div>
        <div className={styles.carousel}>
          <button
            className={`${styles.carousel__button} ${styles.carousel__button__left}`}
          >
            <img src="images/left.svg" alt="" />
          </button>
          <div className={styles.carousel__track__container}>
            <ul className={styles.carousel__track}>
              <li
                className={`${styles.carousel__slide} ${styles.current__slide}`}
              >
                <SuccessStoriesBox1 />
              </li>
              <li className={styles.carousel__slide}>
                <SuccessStoriesBox2 />
              </li>
              <li className={styles.carousel__slide}>
                <SuccessStoriesBox3 />
              </li>
              <li className={styles.carousel__slide}>
                <SuccessStoriesBox4 />
              </li>
            </ul>
          </div>
          <button
            className={`${styles.carousel__button} ${styles.carousel__button__right}`}
          >
            <img src="images/right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
