import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const musician = ({ musicianInstance, bands, allMusicianBands }) => {
  const [selected, setSelected] = useState();
  const art = musicianInstance[0];
  console.log(allMusicianBands);
  const handleSubmit = async () => {
    console.log("hi");
    if (!selected) {
      return;
    }
    console.log("im in");
    try {
      const req = await fetch(
        `http://${process.env.NEXT_PUBLIC_BACKEND}/api/musician_band`,
        {
          method: "POST",
          body: JSON.stringify({
            band_id: Number(selected),
            musician_id: art.musician_id,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(req);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>{art.name}</h1>
      <p>Age: {art.age}</p>
      <p>
        Date of birth:
        {new Date(`${art.date_of_birth}`).toISOString().split("T")[0]}
      </p>
      <img width="300" height="300" src={art.image_url}></img>
      <div>
        <h2>Bands:</h2>
        {allMusicianBands &&
          allMusicianBands.map((band) => {
            return <div key={band.band_id}>{band.name}</div>;
          })}
      </div>
      <Form.Group>
        <Form.Label htmlFor="band">Add your band</Form.Label>
        <Form.Control
          id="band"
          as="select"
          onChange={(e) => setSelected(e.target.value)}
          defaultValue="Select a band"
          custom
        >
          <option value="Select a band" disabled="disabled" selected="selected">
            Select a band
          </option>
          {bands &&
            bands.map((band) => (
              <option value={band.band_id} key={band.band_id}>
                {band.name}
                {band.band_id}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
      <Button onClick={handleSubmit} type="submit">
        Add band
      </Button>
    </div>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get musicians
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_BACKEND}/api/musicians`
  );
  const musicians = await res.json();

  // Get the paths we want to pre-render based on musicians
  const paths = musicians.map((musician) => ({
    params: { id: musician.musician_id.toString() },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_BACKEND}/api/musicians/${params.id}`
  );

  const allBands = await fetch(
    `http://${process.env.NEXT_PUBLIC_BACKEND}/api/bands`
  );

  const msb = await fetch(
    `http://${process.env.NEXT_PUBLIC_BACKEND}/api/musicians/${params.id}/bands`
  );

  const allMusicianBands = await msb.json();
  const bands = await allBands.json();
  const musicianInstance = await res.json();
  return {
    props: { musicianInstance, bands, allMusicianBands },
  };
}

export default musician;
