import { Home } from "./pages/Home/Home.tsx";
import { MyAccount } from "./pages/MyAccount/MyAccount.tsx";
import { MyOrder } from "./pages/MyOrder/MyOrder.tsx";
import { MyOrders } from "./pages/MyOrders/MyOrders.tsx";
import { SingIn } from "./pages/SingIn/SingIn";

export const App = (): JSX.Element => {
  return (
    <>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SingIn />
    </>
  );
};
