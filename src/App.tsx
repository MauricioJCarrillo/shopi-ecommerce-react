import { Home } from "./pages/Home/Home.tsx";
import { MyAccount } from "./pages/MyAccount/MyAccount.tsx";
import { MyOrder } from "./pages/MyOrder/MyOrder.tsx";
import { MyOrders } from "./pages/MyOrders/MyOrders.tsx";
import { SignIn } from "./pages/SignIn/SignIn.tsx";

export const App = (): JSX.Element => {
  return (
    <>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignIn />
    </>
  );
};
