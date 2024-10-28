import { useRoutes, BrowserRouter, RouteObject } from "react-router-dom";
import { Home } from "./pages/Home/Home.tsx";
import { MyAccount } from "./pages/MyAccount/MyAccount.tsx";
import { MyOrder } from "./pages/MyOrder/MyOrder.tsx";
import { MyOrders } from "./pages/MyOrders/MyOrders.tsx";
import { SignIn } from "./pages/SignIn/SignIn.tsx";
import { NotFound } from "./pages/NotFound/NotFound";
import { Navbar } from "./components/Navbar/Navbar.tsx";

// El valor de retorno de useRoutes puede ser JSX.Element | null, ya que useRoutes devolverá null si no hay rutas coincidentes
const AppRoutes = (): JSX.Element | null => {
  const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ];

  return useRoutes(routes);
};

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};
