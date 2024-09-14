import Categories from "@/app/components/categories/Categories";
import Navbar from "@/app/components/header/navbar/Navbar";
import SubHeader from "@/app/components/header/subheader/SubHeader";
import Slider from "@/app/components/Slider/Slider";
import TodayDeals from "@/app/components/todayDeals/TodayDeals";
import LatestProduct from "@/app/components/LatestProduct/LatestProduct";
import BestSelling from "@/app/components/BestSellingProduct/BestSelling";
import Footer from "@/app/components/footer/Footer";

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
