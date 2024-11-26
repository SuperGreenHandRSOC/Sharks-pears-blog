import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-3xl lg:text-6xl font-bold tracking-tighter leading-tight lg:leading-none mb-6 text-center lg:text-left">
      {children}
    </h1>
  );
}
