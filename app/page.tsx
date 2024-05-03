import Categories from "./components/navbar/Categories";
import PropertyList from "./components/navbar/properties/PropertyList";
export default function Home() {
  return (
    <main className="">
      <Categories />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <PropertyList />
      </div>

    </main>
  );
}
