import React from "react";
import styles from "./Popup.module.css";

function Popup({ action }) {
  return (
    <div className={styles.popup}>
      <div className={styles.box}>
        <i className='fas fa-edit'></i>
        <h2 className='heading'> You can still do more </h2>
        <p>Sign a petition to bring change</p>

        <a
          href='https://www.change.org/p/united-nations-fixghana-fixthecountry?recruiter=1199815940&utm_source=share_petition&utm_medium=twitter&utm_campaign=share_petition&recruited_by_id=5e18a3f0-ac01-11eb-9b3e-e16af7c10b64'
          target='_blank'
          rel='noreferrer noopener'
        >
          <button
            className='secondary'
            onClick={() => [action(false), navigator.clipboard.writeText("-")]}
          >
            Sign The Petition
          </button>
        </a>
      </div>
    </div>
  );
}

export default Popup;
