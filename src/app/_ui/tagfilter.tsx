'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import '@/styles/check-slider.css'
import clsx from 'clsx'

export default function TagFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChoice(term: string, checked: boolean) {
    const params = new URLSearchParams(searchParams); // Clone the current search params
    if (term && checked) {
      params.append("filter", term);
    } else {
      params.delete("filter", term);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function Tag({ value }: { value: string }) {
    const isChecked = searchParams?.getAll("filter").includes(value);

    return (
      <div className="bg-slate-300 px-1 m-1 relative flex w-14 h-9 rounded-lg hover:rotate-6 transition-all duration-200">
        <input
          type="checkbox"
          value={value}
          checked={isChecked}
          onChange={(e) => handleChoice(e.target.value, e.target.checked)}
          className="h-full w-full opacity-0 peer"
        />
        <label className={clsx("my-auto font-bold text-slate-600 no-underline peer-checked:line-through transition-all duration-300 decoration-2",{"-m-9":value.length==2, "-m-10":value.length>2})}>{value}</label>
      </div>
    );
  }

  return (
    <div className="flex">
      <Tag value="AI" />
      <Tag value="SE" />
      <Tag value="PSY" />
      <Tag value="LIFE" />
    </div>
  );
}
