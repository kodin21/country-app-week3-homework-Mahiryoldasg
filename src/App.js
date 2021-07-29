import { useEffect, useState } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Statistics from './components/Statistics';

function App() {
  const [data, setData] = useState([]);
  const [displayCountries, setDisplayCountries] = useState(true);
  const [displayStatistics, setDisplayStatistics] = useState(false);
  const getData = async () => {
    let res = await fetch('https://restcountries.eu/rest/v2/all');
    let data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCountries = () => {
    setDisplayStatistics(false);
    setDisplayCountries(true);
  };

  const handleStatistics = () => {
    setDisplayCountries(false);
    setDisplayStatistics(true);
  };

  return (
    <div>
      <Header
        handleCountries={handleCountries}
        handleStatistics={handleStatistics}
        isActive={displayCountries}
      />
      {displayCountries && <Countries countries={data} />}
      {displayStatistics && <Statistics countries={data} />}
    </div>
  );
}

export default App;
