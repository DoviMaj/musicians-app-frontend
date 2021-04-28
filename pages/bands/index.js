import React from "react";

const bands = ({ theBands }) => {
  return (
    <div>
      <h1>Bands:</h1>
      {theBands &&
        theBands.map((band) => (
          <div key={band.band_id}>
            <img width="200" height="200" src={band.image_url}></img>
            <p>Band name: {band.name}</p>
            <p>Description: {band.description}</p>
          </div>
        ))}
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
