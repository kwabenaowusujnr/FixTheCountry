import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import Hero from "../../components/hero/Hero";
import Popup from "../../components/popup/Popup";

// import Broadcast from "./broadcast";
import Greetings from "./greetings";
import Templates from "./TweetTemplates";
import Handles from "./Handles";
// import cbnBody from "./flutterwave";
import "../../shared/gtag/";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [tweet, setTweet] = useState("");

  const randomiser = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  };

  const prepareLink = () => {
    const greeting = Greetings[randomiser(Greetings.length - 1)];
    const handle = Handles[randomiser(Handles.length - 1)];
    const template = Templates[randomiser(Templates.length - 1)];
    const fullTweet = `${greeting} ${handle}, ${template.message}`;

    if (fullTweet.length > 280) {
      prepareLink();
      return;
    }
    setTweet(encodeURI(fullTweet));
  };

  const hashtags = `FixTheCountry`;

  return (
    <React.Fragment>
      <Hero />
      <div className={styles.home}>
        <section className={styles.infoSection}>
          <img src='/assets/img/ghMega.png' className={styles.fistImage} alt='' />
          <h3>
            Ways you can support the <br /> #FixTheCountry movement
          </h3>

          <div className={styles.boxesContainer}>
            <a
              href='https://t.co/QT0TycpFFg?amp=1'
              // href={`mailto:${`contactcbn@cbn.gov.ng`}?subject=${cbnSubject}&body=${cbnBody}`}
              target='_blank'
              rel='noreferrer noopener'
              className={styles.infoBox}
              onClick={() => setShowPopup(true)}
            >
              <i className='fa fa-flag'></i>
              <h4>Join The Movement </h4>
            </a>

            {/* <Link to='/complaint' className={styles.infoBox}>
              <i className='fas fa-feather-alt'></i>
              <h4>Lodge Complaint For Hussaini Coomasie's Video</h4>
            </Link> */}

            <a
              href={`http://twitter.com/intent/tweet?text=${tweet}&hashtags=${hashtags}`}
              target='_blank'
              rel='noreferrer noopener'
              className={styles.infoBox}
              onClick={() => prepareLink()}
            >
              <i className='fab fa-twitter'></i>
              <h4>Tweet</h4>
            </a>

            {/* <Link to='/politicians' className={styles.infoBox}>
              <i className='fas fa-feather-alt'></i>
              <h4>Remind Politicians</h4>
            </Link> */}

            {/* <p className={styles.infoBox}>
              <div className={styles.iconGroup}>
                <a
                  href={`https://api.whatsapp.com/send?phone&text=${Broadcast}${whatsappTags}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <i className='fab fa-whatsapp-square'></i>
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}&quote=${Broadcast}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <i className='fab fa-facebook-square'></i>
                </a>

                <a
                  href={`https://telegram.me/share/url?url=${window.location}&text=${Broadcast}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <i className='fab fa-telegram'></i>
                </a>
              </div>

              <h4>Broadcast</h4>
            </p> */}
          </div>
        </section>

        <footer className={styles.footer}>
          <section>
            <h2>
              <i className='fab fa-twitter'></i> Follow top activists
            </h2>
            <ul>
              <li>
                <a
                  href='https://twitter.com/SneakerNyame_'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @SneakerNyame_
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/gyaigyimii'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @gyaigyimii
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/efiaodo1'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @efiaodo1
                </a>
              </li>
           
            </ul>
          </section>

          <section>
            <h2>
              <i className='fas fa-user'></i> The developer
            </h2>

            <ul>
              <li>
                <a
                  href='https://twitter.com/kwabenacross'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  Twitter - @kwabenacross
                </a>
              </li>

              <li>
                <a
                  href='https://www.linkedin.com/in/isaac-owusu-amoako-jnr-00862091/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  LinkedIN
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.contributors}>
            <h2>
              <i className='fas fa-laptop-code'></i> Contributors
            </h2>
            <ul className={styles.twoColumn}>
              {}

              <li>
                <a
                  href='https://twitter.com/Niles_jamex'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @Niles_jamex (Original Open source project)
                </a>
              </li>

            </ul>
          </section>
        </footer>
      </div>

      {showPopup && <Popup action={setShowPopup} />}
    </React.Fragment>
  );
}

export default Home;
