import React from "react";
import Grid from "@material-ui/core/Grid";

import { withRedux } from "src/lib/redux";
import { initializeStore, INITIAL_STATE } from "src/store";
import Layout from "src/components/Layout";
import TextArea from "src/components/TextArea";
import ColumnsStepper from "src/components/ColumnsStepper";

const LayoutPage = () => {
  return (
    <Layout title="Text columns">
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <TextArea />
        </Grid>
        <Grid item xs={12}>
          <ColumnsStepper />
        </Grid>
      </Grid>
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
