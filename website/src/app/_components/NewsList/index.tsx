import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";

type Props = {
  news: News[];
};

const NewsList = ({ news }: Props) => {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                src="/no-image.png"
                alt=""
                width={1200}
                height={630}
                className={styles.image}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.newsItemTitle}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
