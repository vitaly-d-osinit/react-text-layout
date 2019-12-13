import * as React from "react";
import Link from "next/link";

import Layout from "src/components/Layout";
import { withRedux } from "src/lib/redux";

const LayoutPage: React.FunctionComponent = () => (
  <Layout title="Layout">
    <h1>Layout</h1>
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </Layout>
);

export default withRedux(LayoutPage);
