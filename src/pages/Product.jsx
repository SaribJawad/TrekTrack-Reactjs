import Navbar from "../components/Navbar";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <Navbar />
      <section>
        <img
          src="https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About App.</h2>
          <p>
            Discover the magic of adventure tracking at your fingertips with
            just one click! TrekTrack simplifies the entire process –
            effortlessly record your journey, watch it unfold in real-time on a
            dynamic map,
          </p>
          <p>
            and capture the moments with integrated photos. Let the app handle
            the details while you focus on making memories. Download now and
            turn every step into an unforgettable adventure!
          </p>
        </div>
      </section>
    </main>
  );
}
