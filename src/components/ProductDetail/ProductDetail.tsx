import { XMarkIcon } from "@heroicons/react/24/solid";

export const ProductDetail = (): JSX.Element => {
  return (
    <>
      <aside className="fixed right-0 top-[68px] flex h-[calc(100vh-68px)] w-[360px] flex-col rounded-lg border border-black bg-white">
        <section className="flex items-center justify-between p-6">
          <h2 className="text-xl font-medium">Detail</h2>
          <XMarkIcon className="h-6 w-6 text-black" />
        </section>
      </aside>
    </>
  );
};
