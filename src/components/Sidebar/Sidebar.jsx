import Category from "./category/Category";
import Colors from "./colors/Colors";
import Price from "./price/Price";

function Sidebar() {
  return (
    <section className="sidebar w-[15%] fixed h-full border-2 border-solid border-[#e5e5e5] flex flex-col items-center">
      <div className="logo-container mb-16">
        <h1 className="logo-title text-2xl font-normal mb-5 mt-5">🛒</h1>
      </div>
      <Category />
      <Price />
      <Colors />
    </section>
  )
}

export default Sidebar;