'use client'
import Image from "next/image";
import { Tag } from "./_ui/tags";
import {intro, platform, name} from "./_ui/infos"
import { avator } from "./_ui/infos";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div 
        className="justify-center lg:px-20 lg:w-10/12 lg:mt-20"
        initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: 'spring',
					damping: 25,
					stiffness: 100,
					duration: 0.3
				}}
      >
        <Image
          src= {avator}
          width={180}
          height={180}
          className="mx-auto lg:mx-0"
          alt="My Head really"
        />
        <div className="mt-8 font-mono text-3xl font-extrabold flex justify-start"><p className="mx-auto lg:mx-0">{name}</p></div>
        <ul className="lg:flex pt-4">
          <Tag tagname="NLP"/>
          <Tag tagname="Full_stack"/>
        </ul>
        <ul className="lg:flex"> 
          <Tag tagname="Fan_art"/>
          <Tag tagname="Reading"/>
          <Tag tagname="Undergraduate"/>
        </ul>
        <div className={`font-mono py-4 max-w-96 lg:max-w-2xl mx-auto lg:mx-0`}>
            <p className="text-center lg:text-left">{intro}</p>
        </div>
        <div className="flex lg:justify-start justify-center mt-5">
          <ul className="flex px-auto">
            {platform.map((item)=>{
              return (
                <li className="lg:px-0 lg:mr-5 lg:ml-0 mx-3">
                <Link href={item.href}><Image
                  src={item.src}
                  width={25}
                  height={25}
                  alt={item.name}
                /></Link></li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </main>
  );
}
