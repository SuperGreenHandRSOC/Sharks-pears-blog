'use client';
import Image from "next/image";
import { usePathname, useSearchParams, useRouter} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
 
export function Search({ placeholder}: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  // function handleSearch(term: string) {
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  // }
  },500);
  return (
    <div className={`relative flex flex-1 flex-shrink-0`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="peer flex w-full rounded-md border-2 border-gray-400 py-[9px] pr-10 text-sm outline-2 placeholder:text-gray-500 bg-white opacity-60">
           <Image 
             src="search.svg" 
             width={25} 
             height={25} 
             className="mx-3" 
             alt=""
           />
           <input
             className="block border-none outline-none w-full"
             placeholder={placeholder}
             onChange={(e) => {
               handleSearch(e.target.value);
             }}
             defaultValue={searchParams.get('query')?.toString()}
           />
      </div>
    </div>
  );
}