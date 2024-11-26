import { PrinterFont_bold } from "./fonts";

export function Tag({tagname}:{tagname:string}){
    return (
        <li className={`${PrinterFont_bold.className} lg:flex px-3 pe-0 lg:pe-5 lg:px-0`}>
            <p className="text-center justify-center"># {tagname}</p>
        </li>
    )
}
