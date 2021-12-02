import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import { comments } from "../data";
import Image from "next/image";

function Testimonials() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#009DC4" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>¿Por Qué Nosotros?</h1>
      <div className={styles.wrapper}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.card}>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={`${process.env.NEXT_PUBLIC_URL}/img/icon/${comment.logo}`}
                width="45"
                height="45"
                objectFit="cover"
                alt=""
              />
              <div className={styles.info}>
                <span className={styles.username}>{comment.name}</span>
                <span className={styles.jobTitle}>{comment.title}</span>
              </div>
            </div>
            <p className={styles.comment}>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
