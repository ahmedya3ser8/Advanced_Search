import Input from "../../basic/Input";

function Price({handleChange}) {
  return (
    <div className="sidebar pl-[15px]">
      <h2 className="sidebar-title text-[22px] font-normal mt-[10px] mb-[10px]">Price</h2>
      <div className="sidebar-container">
        <div className="sidebar-box">
          <input onChange={handleChange} type="radio" value="" name="test2" className="sidebar-input" id={6} />
          <label htmlFor={6} >All</label>
        </div>
        <Input handleChange={handleChange} value={50} title="$0 - 50" name="test2" id={7} />
        <Input handleChange={handleChange} value={100} title="$50 - $100" name="test2" id={8} />
        <Input handleChange={handleChange} value={150} title="$100 - $150" name="test2" id={9} />
        <Input handleChange={handleChange} value={200} title="Over $150" name="test2" id={10} />
      </div>
    </div>
  )
}

export default Price;