export const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center border-t border-gray-300 p-5 text-gray-900">
      <p>Made by Mauricio J Carrillo &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};
