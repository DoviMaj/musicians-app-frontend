import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../../styles/MusiciansPage.module.scss";
import MusicianCard from "../../components/MusicianCard";

const band = ({ bandInstance, musicians, allBandMusicians }) => {
  const [selected, setSelected] = useState();
  const band = bandInstance[0];
  const handleSubmit = async () => {
    if (!selected) {
      return;
    }
    try {
      const req = await fetch(
        `http://${process.env.NEXT_PUBLIC_BACKEND}/api/musician_band`,
        {
          method: "POST",
          body: JSON.stringify({
            band_id: band.band_id,
            musician_id: Number(selected),
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!req) return;
      window.location.reload();
      console.log(req);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.profile}>
        <img src={band.image_url}></img>

        <div>
          <h4>Name: {band.name}</h4>
          <p>{band.description}</p>
        </div>
      </div>

      <div className={styles.bands_section}>
        <h2>Musicians:</h2>
        <div className={styles.list}>
          {allBandMusicians &&
            allBandMusicians.map((art) => {
              return <MusicianCard key={art.musician_id} art={art} />;
            })}
        </div>
      </div>
      <Form.Group>
        <Form.Control
          id="musician"
          as="select"
          onChange={(e) => setSelected(e.target.value)}
          defaultValue="Select a musician"
          custom
        >
          <option value="Select a musician" disabled="disabled">
            Select a musician
          </option>
          {musicians &&
            musicians.map((msc) => {
              const ids = allBandMusicians.map((bm) => bm.musician_id);
              if (!ids.includes(msc.musician_id)) {
                return (
                  <option value={msc.musician_id} key={msc.musician_id}>
                    {msc.name}
                    {msc.musician_id}
                  </option>
                );
              }
            })}
        </Form.Control>
      </Form.Group>
      <Button onClick={handleSubmit} type="submit">
        Add Musician
      </Button>
    </div>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get musicians
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_BACKEND}/api/bands`
  );
  const bands = await res.json();

  // Get the paths we want to pre-render based on musicians
  const paths = bands.map((band) => ({
    params: { id: band.band_id.toString() },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND}/api/bands/${params.id}`
    );

    const allMusicians = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND}/api/musicians`
    );

    const msb = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND}/api/bands/${params.id}/musicians`
    );

    const allBandMusicians = await msb.json();
    const musicians = await allMusicians.json();
    const bandInstance = await res.json();
    return {
      props: { bandInstance, musicians, allBandMusicians },
    };
  } catch (err) {
    console.log(err);
  }
}

export default band;
