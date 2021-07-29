import React from 'react';

export default function Countries({ countries }) {
  return (
    <>
      <section>
        {countries.map((country) => {
          const { name, capital, flag, languages, region, population } =
            country;

          return (
            <article key={name} className='card'>
              <img src={flag} alt={name} />
              <div className='card-info'>
                <h4 className='title'>{name}</h4>
                <p>Region : {region}</p>
                <p>Capital : {capital}</p>
                <p>Language : {languages[0].name}</p>
                <p>Population : {population}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
