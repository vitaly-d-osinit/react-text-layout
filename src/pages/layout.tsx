import React from "react";

import { withRedux } from "src/lib/redux";
import { initializeStore, INITIAL_STATE } from "src/store";
import Layout from "src/components/Layout";
import TextArea from "src/components/TextArea";
import ColumnsStepper from "src/components/ColumnsStepper";

const LayoutPage = () => {
  return (
    <Layout title="Text columns">
      <TextArea />
      <ColumnsStepper />
    </Layout>
  );
};

LayoutPage.getInitialProps = () => {
  return {
    reduxStore: initializeStore({
      ...INITIAL_STATE,
      activeNavigation: "columns"
    })
  };
};

export default withRedux(LayoutPage);
