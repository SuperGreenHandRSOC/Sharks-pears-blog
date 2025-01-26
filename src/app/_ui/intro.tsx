import { CMS_NAME } from "@/lib/constants";
import Image from 'next/image';
import { avator, name, quouo } from "./infos"

export function Intro() {
  return (
    <section className="flex-row flex items-end justify-start mt-8 p-3 lg:p-0 lg:mt-0 mb-2  bg-slate-100">
      <Image
        src= {avator}
        width={40}
        height={40}
        className="my-auto ml-5"
        alt="My Head really"
      />
      <h1 className="mx-5 font-mono text-2xl font-bold tracking-tighter leading-tight lg:pr-8 pb-1 lg:pb-4 mt-0">
        {name}{"."}
      </h1>
      <h4 className="invisible w-0 h-0 lg:visible lg:w-auto lg:h-auto text-center lg:text-right lg:text-lg lg:mt-5 lg:pl-8 lg:pb-5 font-mono mx-auto lg:mx-0 lg:ml-auto">
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
