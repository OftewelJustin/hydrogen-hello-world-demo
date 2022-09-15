import { Suspense } from "react";

import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import CardExampleShow from "../components/custom/CardExampleShow.server";
import ExampleShowCollections from "../components/custom/ExampleShowCollections.server";
import ProductsExample from "../components/custom/ProductsExample.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <CardExampleShow />
      </Suspense>
      <Suspense>
        <ExampleShowCollections />
      </Suspense>
      <Suspense>
        <ProductsExample />
      </Suspense>
    </Layout>
  );
}
