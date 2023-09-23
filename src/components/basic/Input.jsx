

const Input = ({ handleChange, value, title, name, color, id }) => {
  return (
    <div className="sidebar-box">
      <input onChange={handleChange} type="radio" value={value} name={name} className="sidebar-input" id={id} />
      <label htmlFor={id}> {title}</label>
    </div>
  );
};

export default Input;
