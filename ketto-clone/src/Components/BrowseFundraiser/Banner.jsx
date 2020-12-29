import React, { Component } from "react";
import style from "./banner.module.css";

class Banner extends Component {
  render() {
    return (
      <div className={style.banner_container}>
        <div className={style.banner_text}>
          <div className={style.banner_title}>Browse Fundraisers</div>
          <div className={style.banner_subtitle}>
            Choose from <span>1,50,256</span> fundraisers to support
          </div>
        </div>

        <div className={style.banner_summary}>
            <div>
                <div className={style.swiper_wrapper}>
                    <div className={style.cont}  style={{width:"350px",marginRight:"30px"}}>
                        <div className={style.summary_icon}>
                            <img src="https://ketto.gumlet.io/assets/images/browse-campaign/lives-impacted.png?dpr=1.0&q=70&w=160" alt="lives impacted" width="64px"/>
                        </div>
                        <div className={style.summary_points}>
                            <div className={style.summary_header}>2 Lakh+</div>
                            <div className={style.summary_subheader}>LIVES IMPACTED</div>
                        </div>
                    </div>
                    <div className={style.bar}></div>
                    <div className={style.cont} style={{width:"350px",marginRight:"30px"}}>
                    <div className={style.summary_icon}>
                            <img src="https://ketto.gumlet.io/assets/images/browse-campaign/raised.png?dpr=1.0&q=70&w=240" width="64px"/>
                        </div>
                        <div className={style.summary_points}>
                            <div className={style.summary_header}>₹1100Crs+</div>
                            <div className={style.summary_subheader}>SUCCESSFULLY RAISED</div>
                        </div>
                    </div>
                    <div className={style.bar}></div>
                    <div className={style.cont} style={{width:"350px",marginRight:"30px"}}>
                    <div className={style.summary_icon}>
                            <img src="https://ketto.gumlet.io/assets/images/browse-campaign/donors.png?dpr=1.0&q=70&w=240" alt="lives impacted" width="64px"/>
                        </div>
                        <div className={style.summary_points}>
                            <div className={style.summary_header}>55 Lakh+</div>
                            <div className={style.summary_subheader}>DONORS FROM AROUND THE WORLD</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Banner;
