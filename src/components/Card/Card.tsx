export const Card = (): JSX.Element => {
  return (
    <>
      <article className="h-60 w-56 cursor-pointer rounded-lg bg-white">
        <figure className="relative mb-2 h-4/5 w-full">
          <figcaption className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black">
            Electronics
          </figcaption>
          <img
            className="h-full w-full rounded-lg object-cover"
            src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="headphones"
          />
          <button className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1">
            +
          </button>
        </figure>
        <p className="flex justify-between">
          <span className="text-sm font-light">Headphones</span>
          <span className="text-lg font-medium">$300</span>
        </p>
      </article>
    </>
  );
};
