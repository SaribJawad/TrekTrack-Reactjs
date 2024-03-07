// Uses the same styles as Product
import styles from "./Product.module.css";
import Navbar from "../components/Navbar.jsx";

export default function Product() {
  return (
    <main className={styles.product}>
      <Navbar />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Invest in a lifetime of extraordinary adventures at the cost of a
            few cups of coffee! With a one-time purchase, you unlock a premium
            suite of tracking, mapping, and personalized features, ensuring your
            explorations are seamless and unforgettable.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
