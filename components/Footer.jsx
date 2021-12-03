import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>ARS DEVELOPMENT</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link} passHref>
            <a>
              <span className={styles.linkText}>CONTÁCTATE CON NOSOTROS</span>
              <Image
                src={
                  process.env.NEXT_PUBLIC_URL + "/img/icon/external-link.svg"
                }
                width="40px"
                height="40px"
                alt=""
              />
            </a>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          POSADAS, MISIONES
          <br />
          ARGENTINA
        </div>
        <div className={styles.cardItem}>
          <Image
            src={process.env.NEXT_PUBLIC_URL + "/img/icon/mail.svg"}
            width="24px"
            height="24px"
            alt=""
          />
          <br />
          ARSDEV@GMAIL.COM
          <br />
          <Link
            href="https://api.whatsapp.com/send?phone=543764825194&text=Hola%2C+ArsDev!"
            passHref
          >
            <a target="_blank">
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/icon/whatsapp.svg"}
                width="24px"
                height="24px"
                alt=""
              />
              <br />
              +543764825194
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          NUESTRAS REDES
          <br />
          <div className={styles.cardIcons}>
            <Link href="https://www.facebook.com/" passHref>
              <>
                <a target="_blank">
                  <Image
                    src={process.env.NEXT_PUBLIC_URL + "/img/icon/facebook.svg"}
                    width="24px"
                    height="24px"
                    alt=""
                  />
                </a>
              </>
            </Link>
            <Link
              href="https://www.instagram.com/silvero.marin.ariel/"
              passHref
            >
              <>
                <a target="_blank">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_URL + "/img/icon/instagram.svg"
                    }
                    width="24px"
                    height="24px"
                    alt=""
                  />
                </a>
              </>
            </Link>
            <Link href="https://twitter.com/ArielSilveroM" passHref>
              <>
                <a target="_blank">
                  <Image
                    src={process.env.NEXT_PUBLIC_URL + "/img/icon/twitter.svg"}
                    width="24px"
                    height="24px"
                    alt=""
                  />
                </a>
              </>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ariel-silvero-92087711a/"
              passHref
            >
              <>
                <a target="_blank">
                  <Image
                    src={process.env.NEXT_PUBLIC_URL + "/img/icon/linkedin.svg"}
                    width="24px"
                    height="24px"
                    alt=""
                  />
                </a>
              </>
            </Link>
          </div>
        </div>
        <div className={styles.cardItem}>
          © 2021 ARS DEVELOPMENT
          <br />
          TODOS LOS DERECHOS RESERVADOS
        </div>
      </div>
    </div>
  );
}

export default Footer;
