import { footer_links } from "@/config";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer
      role="content info"
      className=" bg-brand-dark lg:pt-[100px] lg:pb-[50px]"
    >
      <div className="flex justify-between mx-auto lg:max-w-[1400px] text-brand-primary w-full">
        <div>
          <Link href="/">
            <h1 className="text-[24px] font-bold">Shopeet.com</h1>
          </Link>
        </div>
        <div className="flex gap-[100px] text-white">
          {footer_links.map((item, index) => (
            <div key={index} className="">
              <p className="mb-[10px] font-semibold text-[18px]">
                {item.label}
              </p>
              <div className="flex flex-col gap-[10px]">
                {item.links.map((links, index) => (
                  <Link
                    key={index}
                    href={links.url}
                    className="link flex items-center gap-2"
                  >
                    {links.icon ? <links.icon size={16} /> : null}
                    <p>{links.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Separator.Root
          orientation="horizontal"
          className="bg-white max-w-[1400px] h-[1px] mx-auto my-[30px]"
        />
      </div>
      <div className="text-white flex justify-between lg:max-w-[1400px] mx-auto my-[40px]">
        <div className="flex gap-2 items-center">
          <p>{new Date().getFullYear()}, Shopeet</p>
          <Separator.Root
            orientation="vertical"
            className="bg-white w-[1px] h-4"
          />
          <p>Nigeria</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
          <Link href="" className="link">
            Privacy
          </Link>
          •
          <Link href="" className="link">
            Terms and conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
