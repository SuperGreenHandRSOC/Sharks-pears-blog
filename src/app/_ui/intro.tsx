import { CMS_NAME } from "@/lib/constants";
import Image from 'next/image';
import { avator, name, quouo } from "./infos"
import Search from './search'

export function Intro() {
  return (
    <section className="flex-col lg:flex-row flex items-end lg:justify-start mt-16 lg:mt-0 mb-0 lg:mb-2 p-5 bg-slate-100">
      <Image
        src= {avator}
        width={100}
        height={100}
        className="mx-auto lg:mx-0"
        alt="My Head really"
      />
      <h1 className="mx-auto lg:mx-5 font-mono text-4xl font-bold tracking-tighter leading-tight lg:pr-8 lg:pb-4 mt-8 lg:mt-0">
        {name}{"."}
      </h1>
      <h4 className="text-center lg:text-right text-lg mt-3 lg:mt-5 lg:pl-8 pb-5 font-mono mx-auto lg:mx-0 lg:ml-auto">
        {quouo}{" "}
        {/* <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}. */}
      </h4>
    </section>
  );
}
