import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className="mt-20 flex flex-col items-center">{children}</main>;
};
