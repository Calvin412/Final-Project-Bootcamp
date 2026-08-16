import RecommendProduct from "@/components/RecommendProduct";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";

export default function MainPage() {
  return (
    <div>
      <div className="flex flex-col gap-5 mx-5 mt-30 mb-10">
        <RecommendProduct />
        <div className="pt-5 flex gap-5">  
          <ProductFilter />
          <div>
            <h1 className="w-full text-2xl font-bold pb-3">All Products</h1>
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}