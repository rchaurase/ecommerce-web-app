'use client'
import Categories from "@/app/components/categories/Categories";
import Slider from "@/app/components/Slider/Slider";
import TodayDeals from "@/app/components/todayDeals/TodayDeals";
import LatestProduct from "@/app/components/LatestProduct/LatestProduct";
import BestSelling from "@/app/components/BestSellingProduct/BestSelling";

export default function Home() {
  return (
      <main className="">
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
    </main>
  );
}
