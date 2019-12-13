import React from "react";
import { useDispatch } from "react-redux";

import Layout from "src/components/Layout";
import { withRedux } from "src/lib/redux";
import { initializeStore } from "src/store";

const LayoutPage = () => {
  return <Layout>Layout</Layout>;
};

LayoutPage.getInitialProps = context => {
  // context.reduxStore = initializeStore({
  //   page: {
  //     title: "!!!!!!!!"
  //   }
  // });
};

export default withRedux(LayoutPage);
