import Input from "../../basic/Input";


function Colors({ handleChange }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title text-[22px] font-normal mt-[10px] mb-[10px]">Colors</h2>
      <div className="sidebar-container pl-[10px]">
        <div className="sidebar-box">
          <input onChange={handleChange} type="radio" value="" name="test3" className="sidebar-input" id={11} />
          <label htmlFor={11} >All</label>
        </div>
        <Input handleChange={handleChange} value="black" title="Black" name="test1" color="black" id={12} />
        <Input handleChange={handleChange} value="blue" title="Blue" name="test1" color="blue" id={13} />
        <Input handleChange={handleChange} value="red" title="Red" name="test1" color="red" id={14} />
        <Input handleChange={handleChange} value="green" title="Green" name="test1" color="green" id={15} />
        <Input handleChange={handleChange} value="white" title="white" name="test1" color="white" id={16} />
      </div>
    </div>
  )
}

export default Colors;