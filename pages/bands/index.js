import React from "react";
import BandCard from "../../components/BandCard";
import styles from "../../styles/ListPage.module.scss";

const bands = ({ theBands }) => {
  return (
    <div className={styles.page}>
      <h1>Bands:</h1>
      <div className={styles.list}>
        {theBands &&
          theBands.map((band) => <BandCard key={band.band_id} band={band} />)}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_BACKEND}/api/bands`,
    {
      method: "GET",
    }
  );
  const theBands = await res.json();

  return {
    props: {
      theBands,
    },
  };
}

export default bands;
