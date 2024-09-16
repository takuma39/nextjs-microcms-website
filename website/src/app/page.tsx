import styles from "@/app/page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.top}>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
