import React from "react";

import Layout from "src/components/Layout";
import { withRedux } from "src/lib/redux";

const IndexPage = () => {
  return <Layout>Index</Layout>;
};

export default withRedux(IndexPage);
