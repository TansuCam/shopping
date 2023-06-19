// Components
// ---------------
import Products from "@/components/products";
import ProductHeader from "@/components/products/header";

// Main
// ---------------
export default function Home() {
  return (
    <div>
      <ProductHeader />
      <div className="flex">
        <Products />
      </div>
    </div>
  );
}
