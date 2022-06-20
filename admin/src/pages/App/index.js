/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Suspense, lazy } from "react";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";

const Preview = lazy(() => import("../../components/Preview"));

const App = () => {
  return (
    <Suspense fallback={<LoadingIndicatorPage />}>
      <Preview />
    </Suspense>
  );
};

export default App;
