import React from "react";
import MusicianCard from "../../components/MusicianCard";
import styles from "../../styles/ListPage.module.scss";

const musicians = ({ artists }) => {
  return (
    <div className={styles.page}>
      <h1>Musicians:</h1>
      <div className={styles.list}>
        {artists &&
          artists.map((art) => (
            <MusicianCard key={art.musician_id} art={art} />
          ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_BACKEND}/api/musicians`,
    {
      method: "GET",
    }
  );
  const artists = await res.json();

  return {
    props: {
      artists,
    },
  };
}

export default musicians;
