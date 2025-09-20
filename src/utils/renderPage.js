import Home from "../pages/home.jsx";
import Keys from "../pages/keys.jsx";
import Payments from "../pages/payments.jsx";

export const renderPage = (page) => {
  switch (page) {
    case 'home':
      return <Home/>;
    case 'keys':
      return <Keys/>;
    case 'payments':
      return <Payments/>;
    default:
      return <Home/>;
  }
};
