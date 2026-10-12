"use client"
import styles from './ArticleList.module.css';
import { ArticleMeta } from '@/components/ArticleMeta';
import Link from "next/link";
import type { Post } from '@/types/posts';
import Image from 'next/image';

type Props = {
  post: Post;
}

export const ArticleList = ({ post }: Props) => {
  return (
    <article>
      <Link href={`/posts/${post.id}`} className={styles.link}>
        <div className={styles.thumb}><Image src={post.thumbnailUrl} alt="" width={240} height={120} /></div>
        <div className={styles.body}>
            <ArticleMeta createdAt={post.createdAt} categories={post.categories} />
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </Link>
    </article>
  );
}