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
    Link,
} from "@shopify/hydrogen";

import { Suspense } from "react";      


export default function CardExampleShow() {

    const {
        data: { product },
    } = useShopQuery({
        query: PRODUCT_QUERY,
        cache: CacheLong(),
    });

  return (
    
    <div className="flex flex-wrap min-h-screen w-full bg-gray-50 content-center justify-center py-10">
      <div className="flex ">

        <div className="flex flex-wrap content-center justify-center  bg-white w-8/12">
          <div className="w-72 text-center">
            <p className="text-yellow-600 font-bold uppercase">BIJ AANKOOP VAN EEN TAS | OP=OP</p>
            <h1 className="text-2xl font-semibold">Cadeau van Pip</h1>
            {/* {console.log(product.priceRange.maxVariantPrice.amount)} */}
            <img className='mt-6' src={product.images.nodes[0].url} alt="" />
            <h1 key={product.id} className="text-xl">{product.title}</h1>
            <h1 className="text-gray-400 uppercase ">{product.priceRange.maxVariantPrice.amount}</h1><span>{product.priceRange.maxVariantPrice.currencyCode}</span><br></br>
            <Link to={`/products/${product.handle}`}>
              <button className='uppercase hover:ease-in bg-gray-900 hover:bg-gray-700 p-3 w-full text-white'>shop nu</button>
            </Link>
          </div>
        </div>

        <div className=" flex-wrap content-center justify-center rounded-r-md">
            {/* Placeholder for dynamic image or static */}
          <img className=" bg-center bg-no-repeat bg-cover " src={image}></img>
        </div>
      </div>
    </div>
  )
}

const PRODUCT_QUERY = gql`
  query ProductInfo {
    shop {
        name
        description
    }
    product(id: "gid://shopify/Product/7604647591992") { 
      title
      handle
      images(first: 1) {
        nodes {
          url
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`



