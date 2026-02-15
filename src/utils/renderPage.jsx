import HomePage from "../pages/HomePage.jsx";
import Keys from "../pages/keys.jsx";
import Payments from "../pages/payments.jsx";

export const renderPage = (page) => {
  switch (page) {
    case 'home':
      return <HomePage/>;
    case 'keys':
      return <Keys/>;
    case 'payments':
      return <Payments/>;
    default:
      return <HomePage/>;
  }
};
