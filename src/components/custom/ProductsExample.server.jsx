
import {
    gql,
    useShopQuery,
    useServerAnalytics,
    useRouteParams,
    ShopifyAnalyticsConstants,
    Seo,
    fetchSync,  
    CacheLong,
    Link,
} from "@shopify/hydrogen";

import { Suspense } from "react";      


export default function ProductsExample() {


    const {
        data: { products },
    } = useShopQuery({
        query: PRODUCTS_QUERY,
        cache: CacheLong(),
    });


  return (

    // <section className="bg-gray-50">
    //   <div className="mx-auto max-w-2xl py-16 lg:max-w-7xl">
    //     <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
    //         {products.nodes.map((product) => (
    //           <Link to={`/products/${product.handle}`}>
    //             <a key={product.id} href={product.href} className="group">
    //               <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
    //                 <img
    //                     src={product.variants.nodes[0].image.url}
    //                     alt={product.imageAlt}
    //                     className="h-full w-full object-cover object-center group-hover:opacity-80 transition-all	"
    //                   />
    //               </div>
    //             <h3 className="mt-4 text-lg text-gray-900">{product.title}</h3>
    //             <p className="mt-1 text-lg font-medium text-gray-900">{product.variants.nodes[1].priceV2.amount}</p>
    //           </a>
    //           </Link>
    //         ))}
    //     </div>
    //   </div>
    // </section>
      <section>
        <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">  
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.nodes.map((product) => (
              
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.variants.nodes[0].image.url}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                    <Link to={`/products/${product.handle}`}>
                      <a href={"#"}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                      </Link>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.variants.nodes[1].priceV2.amount} <span>{product.variants.nodes[1].priceV2.currencyCode}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>   
  )
}
const PRODUCTS_QUERY = gql`
  query ProductInfo {
    shop {
        name
        description
    }
    products(first: 8) {
        nodes {
            id
            title
            handle
            variants(first: 4) {
              nodes {
                id
                image {
                  url
                  altText
                  width
                  height
                }
                priceV2 {
                  amount
                  currencyCode
                }
                compareAtPriceV2 {
                  amount
                  currencyCode
                }
              }
            
            }
        }
    }
  }
`


