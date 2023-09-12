import { useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = ({ searchQuery, setSearchQuery, title }) => {
  const capitalizeWords = (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <nav
      className={`sticky top-0 py-1 bg-transparent bg-center bg-cover bg-no-repeat ${'bg-[url("/images/nav_bar.png")]'}`}
    >
      <div className="flex flex-row item-center justify-between m-2">
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="mr-2 h-auto bg-cover"
              src="/images/Back.png"
              alt="Back"
              width={24}
              height={24}
            />
          </Link>
          {title && (
            <div className="text-white">
              {capitalizeWords(title) || "Romance Comedy"}
            </div>
          )}
        </div>

        <div className="flex justify-end items-center ">
          <div
            className="flex justify-end items-center"
            onClick={() => setSearchToggle(!searchToggle)}
          >
            <Image
              className="mx-2 h-auto bg-cover"
              src="/images/search.png"
              alt="Search"
              width={20}
              height={22}
            />
          </div>
        </div>
      </div>
      <div className="m-1">
        {searchToggle && (
          <input
            autoFocus
            className="w-full p-2 bg-black text-white border border-white rounded"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
      </div>
    </nav>
  );
};

export default memo(NavBar);
