import { movieCategories } from "@/constants/movies";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  console.count("Home Render");
  return (
    <main>
      <Head>
        <title>Movie App</title>
      </Head>
      <div className="m-5">
        <h1 className="text-4xl mb-5">Movie Categories</h1>
        <div className="grid grid-cols-1 divide-y-4 divide-slate-400/25 text-white text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto">
          {movieCategories.map((category) => (
            <div className="rid grid-cols-1 divide-y" key={category}>
              <h2 className="p-4 text-slate-400 bg-white dark:bg-slate-800">
                <Link href={`/categories/${category.toLowerCase()}`}>{category}</Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
