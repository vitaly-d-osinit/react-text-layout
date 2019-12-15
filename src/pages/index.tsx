import React from "react";
import Grid from "@material-ui/core/Grid";

import { withRedux } from "src/lib/redux";
import Layout from "src/components/Layout";
import TextArea from "src/components/TextArea";
import { INITIAL_STATE, initializeStore } from "src/store";

const IndexPage = () => {
  return (
    <Layout title="Text area">
      <Grid>
        <TextArea />
      </Grid>
    </Layout>
  );
};

IndexPage.getInitialProps = () => {
  return {
    reduxStore: initializeStore({
      ...INITIAL_STATE,
      activeNavigation: "text"
    })
  };
};

export default withRedux(IndexPage);
