import { Footer } from "../Footer/Footer";

type Props = { children: JSX.Element };

export const Layout = ({ children }: Props) => {
  return (
    <section className="flex min-h-screen flex-col">
      <main className="mt-20 flex flex-1 flex-col items-center">
        {children}
      </main>
      <Footer />
    </section>
  );
};
