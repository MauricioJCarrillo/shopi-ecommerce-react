type Props = { children: JSX.Element };

export const Layout = ({ children }: Props) => {
  return <main className="mt-20 flex flex-col items-center">{children}</main>;
};
