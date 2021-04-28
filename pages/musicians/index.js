import React from "react";
import Link from "next/link";

const musicians = ({ artists }) => {
  return (
    <div>
      <h1>Musicians:</h1>
      {artists &&
        artists.map((art) => (
          <Link href={`/musicians/${art.musician_id}`} key={art.musician_id}>
            <div>
              <img width="150" height="150" src={art.image_url}></img>
              <p>Name: {art.name}</p>
              <p>Instrument: {art.instrument}</p>
            </div>
          </Link>
        ))}
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
