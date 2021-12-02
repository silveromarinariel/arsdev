import Circle from "../components/Circle";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ars Dev</title>
        <meta name="description" content="Ars Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Circle backgroundColor="#009DC4" top="70vh" left="-50vh" />
      <Circle backgroundColor="#009DC4" top="-70vh" right="-40vh" />
      <div className={styles.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/about.png"}
          width="600px"
          height="600px"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>¿QUIÉNES SOMOS?</span>
        </h1>
        <div className={styles.subtitle}>
          En Ars Development nos enfocamos en vos
        </div>
        <p className={styles.desc}>
          Creemos en el trabajo en equipo, como la base para obtener mejores
          resultados, buscamos dar respuesta a las necesidades de nuestros
          clientes ofreciendo una solución a medida que encaje dentro de sus
          necesidades y le permita centrarse en las exigencias de su negocio.
          <br />
          Somos expertos en soluciones web, plataformas móviles y consultoría.
          Nos valemos de los recursos tecnológicos de última generación
          complementados con la experiencia de nuestro equipo, para diseñar y
          desarrollar soluciones eficientes a las necesidades de nuestros
          clientes.
          <br />
          Queremos ser tu socio tecnológico, colaborando en el crecimiento de tu
          empresa, acompañándote y cumpliendo tus expectativas.
        </p>
      </div>
    </div>
  );
};

export default about;
