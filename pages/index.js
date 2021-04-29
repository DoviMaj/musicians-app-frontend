import { Button } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div className={styles.Home}>
      <h1 className={styles.title}>
        <strong>Let's make your career shine!</strong>
      </h1>

      <div className={styles.links}>
        <div className={styles.card}>
          <h1>Register as a Band!</h1>
          <Link href="/band_form">
            <Button color="primary">Take me there</Button>
          </Link>
        </div>
        <div className={styles.card}>
          <h1>Register as a Musician!</h1>
          <Link href="/musician_form">
            <Button color="primary">Take me there</Button>
          </Link>
        </div>
      </div>

      <img src="https://online.berklee.edu/takenote/wp-content/uploads/2019/08/john-hult-xxgkYSD-ekE-unsplash.jpg"></img>
    </div>
  );
}
