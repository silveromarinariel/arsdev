import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
import Link from "next/link";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#009DC4" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#009DC4" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>ARS DEVELOPMENT</span>
          <br />
          CONSULTORÍA IT Y DESARROLLO DE SOFTWARE
        </h1>
        <p className={styles.desc}>
          En Ars Development somos especialistas en brindar soluciones de
          Software a medida para de tus necesidades.
        </p>
        <Link href="/contact" passHref>
          <button className={styles.button}>CONTÁCTANOS</button>
        </Link>
      </div>
      <div className={styles.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/ars.png"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
