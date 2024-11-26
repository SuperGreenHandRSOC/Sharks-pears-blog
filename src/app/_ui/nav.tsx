'use client'

import Link from "next/link"
import clsx from 'clsx';
import { usePathname } from "next/navigation";
import {links} from "./infos"


export function Nav(){
    const pathname = usePathname();
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed left-0 top-0 mx-auto flex w-full justify-center py-4 lg:py-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
                <div className="flex justify-center"><ul className="flex px-auto">
                    {links.map((link) => {
                        return(
                            <li key={link.name}><Link
                                href={link.href}
                                className={clsx(
                                    "flex h-[42px] w-[36px] lg:w-[80px] ms-5 grow items-center justify-center gap-2 rounded-2xl p-3 text-sm font-medium hover:bg-slate-600 hover:text-white",
                                    {
                                        'bg-slate-400 text-white':pathname === link.href,
                                        'bg-white text-slate-600':pathname !== link.href,
                                        // 为啥不能在上面的样式中写 text-slate-600 啊啊啊
                                        // 而且这里也不能 bg-slate-300
                                        // SOLVED: clsx 包括而不是覆盖
                                    }
                                )}
                            >
                                {link.icon}
                                <p className="hidden lg:block">{link.name}</p>
                            </Link></li>
                        )
                    })}
                </ul></div>
            </div>
        </div>
    )
}