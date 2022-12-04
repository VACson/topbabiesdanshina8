import React from 'react';
import { donatersData } from './donatersData';
import moneyIcon from '../../../assets/img/moneyIcon.svg';

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

          <div className="donaterspage__person__sum">
            {person.sum.toFixed(2)}
            <img className="donaterspage__person__moneyIcon" src={moneyIcon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DonatersPage;
