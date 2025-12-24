import type { Metadata } from "next";
import Link from "next/link";
import css from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 – Page not found | NoteHub",
  description:
    "The page you are looking for does not exist. Please check the URL or return to the homepage.",
  openGraph: {
    title: "404 – Page not found | NoteHub",
    description:
      "The page you are looking for does not exist. Please check the URL or return to the homepage.",
    url: "https://08-zustand-dusky-seven.vercel.app/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub Not Found",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>404</h1>
        <p className={css.text}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className={css.link}>
          Go back home
        </Link>
      </div>
    </main>
  );
}
