const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns hover:bg-slate-200">
      {title}
    </button>
  );
};

export default Button;