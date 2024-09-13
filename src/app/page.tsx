import Categories from "@/components/categories/Categories";
import Navbar from "@/components/header/navbar/Navbar";
import SubHeader from "@/components/header/subheader/SubHeader";
import Slider from "@/components/Slider/Slider";
import TodayDeals from "@/components/todayDeals/TodayDeals";
import LatestProduct from "@/components/LatestProduct/LatestProduct";
import BestSelling from "@/components/BestSellingProduct/BestSelling";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="">
      <div>
        <SubHeader/>
      </div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Slider/>
      </div>
      <div>
        <Categories/>
      </div>
      <div>
        <TodayDeals/>
      </div>
      <div>
        <LatestProduct/>
      </div>
      <div>
        <BestSelling/>
      </div>
      <div>
        <Footer/>
      </div>
    </main>
  );
}
