import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import Menu from '../Menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
