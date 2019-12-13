import React from "react";

import Layout from "src/components/Layout";
import { withRedux } from "src/lib/redux";

const LayoutPage = () => {
  return <Layout>Layout</Layout>;
};

export default withRedux(LayoutPage);
