import React from "react";
import Link from "next/link";
import styles from "../styles/Card.module.scss";

const MusicianCard = ({ art }) => {
  return (
    <Link href={`/musicians/${art.musician_id}`}>
      <div key={art.musician_id} className={styles.card}>
        <img width="150" height="150" src={art.image_url}></img>
        <h4>{art.name}</h4>
        <p>{art.instrument} player</p>
      </div>
    </Link>
  );
};

export default MusicianCard;
