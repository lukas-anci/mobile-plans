const CustomRadio = (props) => {
  return (
    <div onClick={props.onClick} className="radio">
      {!props.checked ? (
        <strong>Not Selected</strong>
      ) : (
        <strong>Selected</strong>
      )}
      <span>{props.children}</span>
    </div>
  );
};

export default CustomRadio;
