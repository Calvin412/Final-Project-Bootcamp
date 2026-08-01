import AppBar from "@/components/appbar";
import RecommendProduct from "@/components/RecommendProduct";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";

export default function MainPage() {
  return (
    <div>
      <AppBar />
      <div className="flex flex-col gap-5 mx-5 mt-34 mb-10">
        <RecommendProduct />
        <div className="pt-5 flex gap-5">  
          <ProductFilter />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}