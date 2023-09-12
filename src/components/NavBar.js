import { useState } from "react";
import Image from "next/image";

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <nav
      className={`sticky top-0 py-1 h-auto bg-transparent bg-cover ${'bg-[url("/images/nav_bar.png")]'}`}
    >
      <div className="flex flex-row item-center justify-between m-2">
        <div className="flex items-center">
          <Image
            className="mr-2 h-auto"
            src="/images/Back.png"
            alt="Back"
            width={24}
            height={24}
          />
          <div className="text-white">Romance Comedy</div>
        </div>

        <div className="flex justify-end items-center ">
          <div
            className="flex justify-end items-center"
            onClick={() => setSearchToggle(!searchToggle)}
          >
            <Image
              className="mx-2 h-auto"
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

export default NavBar;
