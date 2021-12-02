import Circle from "../components/Circle";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

const contact = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    e.target.reset();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Ars Dev</title>
        <meta name="description" content="Ars Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Circle backgroundColor="#009DC4" left="-40vh" top="-20vh" />
      <Circle backgroundColor="#009DC4" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>ESCRÍBENOS</h1>
      <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
        <input
          className={styles.inputS}
          id="name"
          type="text"
          name="name"
          placeholder="Nombre"
          required
        />
        <input
          className={styles.inputS}
          id="phone"
          type="number"
          name="phone"
          placeholder="Telefono"
          required
        />
        <input
          className={styles.inputL}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className={styles.textArea}
          placeholder="Mensaje"
          rows={6}
          id="message"
          name="message"
          required
        />
        <button
          className={styles.button}
          onClick={() => {
            alert("Mensaje enviado");
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default contact;
