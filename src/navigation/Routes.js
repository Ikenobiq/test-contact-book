import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const ContactList = lazy(() =>
  import("../pages/ContactBookPage/ContactBookPage"),
);
const Contact = lazy(() => import("../pages/ContactInfoPage/ContactInfoPage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const Path = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<ContactList title="Contact book" />} exact />
        <Route
          path="/contact/:contactID"
          element={<Contact title="Contact information" />}
          exact
        />
        <Route element={<NotFound title="Not Found" />} />
      </Routes>
    </Suspense>
  );
};
export default Path;
