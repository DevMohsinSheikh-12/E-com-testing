import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory"
import { sliceString, SlugInput } from "sanity"


async function CategoryPage(
  {params} :{params:Promise<{slug:string}> }
) {
  const {slug} = await params
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories()

  return (
    <div className=" flex flex-col items-center justify-top rounded-lg shadow-md w-full max-w-screen bg-gray-100 p-4">
    <div className=" bg-white p-8  rounded-lg shadow-md w-full max-w-4xl ">
      <h1 className="text-3xl">
        {slug
        .split("")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")}{" "}
        collection
      </h1>
      <ProductsView products={products} categories={categories} />
    </div>
    </div>
  )
}

export default CategoryPage