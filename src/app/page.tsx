import AllProducts from "@/Components/AllProducts";
import Banner from "@/Components/Banner";
import DeccreaseProduct from "@/Components/DeccreaseProducts";
import IncreaseProduct from "@/Components/IncreaseProducts";
export default function Home() {
    return (
        
        
        <main className="min-h-screen bg-[#eef7f0]">
            
            <Banner />
            <IncreaseProduct />
            <DeccreaseProduct />
            <AllProducts />
            
        </main>
            
    )
}
