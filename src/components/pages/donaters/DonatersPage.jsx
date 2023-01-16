import React from 'react';
import { donatersData } from './donatersData';

function DonatersPage() {
  const sortedDonaters = donatersData.sort((a, b) => (a.sum > b.sum ? 1 : -1)).reverse();
  const donaterSum = (value) => {
    return value.split('.');
  };
  return (
    <div className="donaterspage font-roboto">
      <div className="donaterspage__heading">Наші улюблені донатери</div>
      {sortedDonaters.map((person, index) => (
        <div className="donater" key={index}>
          <div className="donater__name">
            {person.firstName} {person.surName.substring(0, 1)}.
          </div>
          <div className="donater__sum">
            <div className="">{donaterSum(person.sum.toFixed(2))[0]}.</div>
            <div className="donater__sum--small">{donaterSum(person.sum.toFixed(2))[1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DonatersPage;
