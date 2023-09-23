import Input from "../../basic/Input";

function Category({handleChange}) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title text-[22px] font-normal mb-[10px]">Category</h2>
      <div className="sidebar-container">
        <div className="sidebar-box">
          <input onChange={handleChange} type="radio" value="" name="test" className="sidebar-input" id={1} />
          <label htmlFor={1} >All</label>
        </div>
        <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" id={2} />
        <Input handleChange={handleChange} value="flats" title="Flats" name="test" id={3} />
        <Input handleChange={handleChange} value="sandals" title="Sandals" name="test" id={4} />
        <Input handleChange={handleChange} value="heels" title="Heels" name="test" id={5} />
      </div>
    </div>
  )
}

export default Category;