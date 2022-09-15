import image from '../../assets/images/placeholder.png'

import {
    gql,
    useShopQuery,
    useServerAnalytics,
    useRouteParams,
    ShopifyAnalyticsConstants,
    Seo,
    fetchSync,  
    CacheLong,
    Money,
    Image,
    Link,
} from "@shopify/hydrogen";

import { Suspense } from "react";      


export default function ExampleShowCollections() {

    const {
        data: { collections },
    } = useShopQuery({
        query: COLLECTIONS_QUERY,
        cache: CacheLong(),
    });
   return (
    <section>
      <div className="mx-auto w-full  ">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 ">
            {collections.nodes.map((collections) => (
              <Link to={`/collections/${collections.handle}`}>
              <div className="basis-1/4 md:basis-1/3 ">
                {collections?.image && (
                    <Image
                      className="shadow-border overflow-clip inline-block w-full aspect-[5/4] md:aspect-[3/2] transition-all hover:opacity-75 object-cover"
                      width={"100%"}
                      height={"100%"}
                      alt={`Image of ${collections.title}`}
                      data={collections.image}
                    />
                    
                )}
              </div>    
            </Link> 
            ))}
        </div>
      </div>
    </section>

  )
}

const COLLECTIONS_QUERY = gql`
  query Collections {
    shop {
        name
        description
    }
    collections(first: 2) {
        nodes {
            title
            handle
            image {
              altText
              width
              height
              url
            }
        }
    }
  }
`



