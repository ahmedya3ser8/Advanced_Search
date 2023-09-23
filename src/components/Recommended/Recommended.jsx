import Button from "../basic/Button";

function Recommended({ handleClick }) {
  return (
    <div className="products-btns">
      <h2 className="ml-[20rem] mt-[20px] mb-[20px] text-2xl">Recommended</h2>
      <div className="recommended-btns flex ml-[20rem]">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  )
}

export default Recommended;