import React, { useMemo } from "react";
import Grid from "@material-ui/core/Grid";

import { withRedux } from "src/lib/redux";
import { initializeStore, INITIAL_STATE, useActiveColumn } from "src/store";
import Layout from "src/components/Layout";
import ColumnsStepper from "src/components/ColumnsStepper";
import TextArea from "src/components/TextArea";

const useTextColumns = () => {
  const activeColumn = useActiveColumn();

  return useMemo(() => {
    const count = 12 / activeColumn;
    return new Array(activeColumn).fill(count);
  }, [activeColumn]);
};

const LayoutPage = () => {
  const textColumns = useTextColumns();

  return (
    <Layout title="Text columns">
      <Grid spacing={2} container>
        <Grid item>
          <Grid container xs={12} wrap="nowrap">
            {textColumns.map((count, column) => (
              <Grid item key={column} xs={count}>
                <TextArea column={column} />
              </Grid>
            ))}
          </Grid>
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
