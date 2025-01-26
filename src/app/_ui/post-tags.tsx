import Link from "next/link"
import { PrinterFont_bold } from "./fonts"
export function PostTag({className, href, children}:{className:string, href:string, children:string}){
    return (
        <div className={`${className} ${PrinterFont_bold.className} hover:rotate-6 transition-all duration-200`}>
            {href === "" && 
                <p># {children}</p>
            }
            {href !== "" && 
                <Link
                    href={href}
                >{children}</Link>
            }
        </div>
    )
}
export function PostTagList({tags, className}: {tags:string[], className:string}){
    return (
        <>
            {tags.length > 0 && <div className={`flex justify-start ${className}`}>
                {tags.map((tag)=>(
                    <PostTag key={tag} className="mr-5 my-auto" href="" children={tag} />
                ))}
            </div>}
        </>
    );
}