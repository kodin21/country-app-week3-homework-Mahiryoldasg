import Buttons from './Buttons';

function Header({ handleCountries, handleStatistics, isActive }) {
  return (
    <header>
      <div className='btn-container'>
        <Buttons
          handleClick={handleCountries}
          title='Display Countries'
          isActive={isActive}
        />
        <Buttons
          handleClick={handleStatistics}
          title='Display Statistics'
          isActive={!isActive}
        />
      </div>
    </header>
  );
}

export default Header;
