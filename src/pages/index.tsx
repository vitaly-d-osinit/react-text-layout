import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";

import Layout from "src/components/Layout";
import { withRedux } from "src/store";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>
        <Link href="/layout">
          <a>Layout</a>
        </Link>
      </p>
    </Layout>
  );
};

export default withRedux(IndexPage);
