import styles from "../styles/Services.module.css";
import Link from "next/link";
import Image from "next/image";

function Services({ services }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Diseñamos, desarrollamos y ofrecemos soluciones adecuadas para tus
        problemáticas
      </h1>
      <h1 className={styles.subtitle}>
        Servicios en los que te podemos ayudar
      </h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`${process.env.NEXT_PUBLIC_URL}/img/${service.video}`}
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt=""
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
