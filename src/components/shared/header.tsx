import { header_icons } from "@/config";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="w-full py-5 text-brand-dark">
      <div className="flex justify-between max-w-[1400px] mx-auto">
        <div>
          <h1 className="text-brand-dark text-[24px] font-bold">Shopeet</h1>
        </div>
        <div>
          <div>
            <input type="text" placeholder="search items here" className="bg-transparent"/>
          </div>
        </div>
        <div className="flex gap-5">
          {header_icons.map((links, index) => (
            <Link href={links.url} className="flex items-center gap-2">
              <links.icon
                size={25}
                className="text-brand-primary p-[5px] items-center rounded-full"
              />
              <p className="text-[18px]">{links.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
