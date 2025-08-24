import CategoryIcon from "@/components/CategoryIcon";
import CategorySection from "@/components/CategorySection";
import HeroSlider from "@/components/HeroSlider";
import RecommendedProducts from "@/components/RecommendedProducts";
export default function Home() {
  return (
    <section className="container m-auto mt-10">
      <HeroSlider />
      <CategoryIcon />
      <RecommendedProducts limit={15} />
      <CategorySection category="Electronics" limit={10} />
      <CategorySection category="Mobiles" limit={10} />
      <CategorySection category="Laptops" limit={10} />
      <CategorySection category="Gaming" limit={10} />
      <CategorySection category="Supermarket" limit={10} />
    </section>
  );
}
