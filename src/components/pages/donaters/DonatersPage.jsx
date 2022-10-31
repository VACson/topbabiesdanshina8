import React from 'react';
import { donatersData } from './donatersData';

function DonatersPage() {
  const sortedDonaters = donatersData.sort((a, b) => (a.sum > b.sum ? 1 : -1)).reverse();
  return (
    <div className="donaterspage font-roboto">
      {sortedDonaters.map((person, index) => (
        <div className="donaterspage__person" key={index}>
          <div className="donaterspage__person__name">
            <div className="donaterspage__person__">{person.firstName}</div>
            <div className="donaterspage__person__">{person.surName.substring(0, 1)}.</div>
          </div>
          <div className="donaterspage__person__">{person.sum.toFixed(2)} &#8372;</div>
        </div>
      ))}
    </div>
  );
}

export default DonatersPage;
