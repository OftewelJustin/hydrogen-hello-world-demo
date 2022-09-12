import { Suspense } from "react";

import '../assets/css/style.css'
import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import CardExampleShow from "../components/CardExampleShow.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <CardExampleShow />
      </Suspense>
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}
