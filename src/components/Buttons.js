function Buttons({ handleClick, title, isActive }) {
  return (
    <button onClick={handleClick} className={isActive ? 'btn active' : 'btn'}>
      {title}
    </button>
  );
}

export default Buttons;
