import React from 'react';

export default function Statistics({ countries }) {
  let allLanguages = [];
  // const count = {};
  // const mostPopolarLanguages = [];

  // eslint-disable-next-line
  countries.map((country) => {
    country.languages.map((language) => allLanguages.push(language.name));
  });

  let filteredLanguages = allLanguages.reduce((total, language) => {
    if (!total[language]) {
      total[language] = { language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  filteredLanguages = Object.values(filteredLanguages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 10);

  return (
    <>
      <div className='center'>
        <ol>
          {filteredLanguages.map(({ language, value }) => {
            return (
              <li key={language}>
                {language} - {value}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
