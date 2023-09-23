import Category from "./category/Category";
import Colors from "./colors/Colors";
import Price from "./price/Price";
import './sidebar.css';

function Sidebar({handleChange}) {
  return (
    <section className="sidebar w-[15%] fixed h-full border-2 border-solid border-[#e5e5e5] flex flex-col items-center">
      <div className="logo-container mb-10">
        <h1 className="logo-title text-2xl font-normal mb-3 mt-3">🛒</h1>
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange} />
    </section>
  )
}

export default Sidebar;