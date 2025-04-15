import { useRoutes, BrowserRouter, RouteObject } from "react-router-dom";
import { Home } from "./pages/Home/Home.tsx";
import { MyAccount } from "./pages/MyAccount/MyAccount.tsx";
import { MyOrder } from "./pages/MyOrder/MyOrder.tsx";
import { MyOrders } from "./pages/MyOrders/MyOrders.tsx";
import { SignIn } from "./pages/SignIn/SignIn.tsx";
import { NotFound } from "./pages/NotFound/NotFound";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";
import { ProductProvider } from "./context/ProductContext.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

// El valor de retorno de useRoutes puede ser JSX.Element | null, ya que useRoutes devolverá null si no hay rutas coincidentes
const AppRoutes = (): JSX.Element | null => {
  const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:orderId", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ];

  return useRoutes(routes);
};

export const App = (): JSX.Element => {
  return (
    <ShoppingCartProvider>
      <ProductProvider>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <AppRoutes />
          </Layout>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </ShoppingCartProvider>
  );
};
