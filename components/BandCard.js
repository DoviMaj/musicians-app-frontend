import React from "react";
import Link from "next/link";
import styles from "../styles/Card.module.scss";

const BandCard = ({ band }) => {
  return (
    <Link href={`/bands/${band.band_id}`}>
      <div className={styles.card}>
        <img width="150" height="150" src={band.image_url}></img>
        <h4>{band.name}</h4>
        <p>{band.description}</p>
      </div>
    </Link>
  );
};

export default BandCard;
