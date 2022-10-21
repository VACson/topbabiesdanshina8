import React from 'react';

function DonatersPage() {
  const ALL_DONATERS = [
    { name: 'a', sum: 101 },
    { name: 'a', sum: 100 },
    { name: 'a', sum: 44 },
    { name: 'a', sum: 100 },
    { name: 'a', sum: 20 },
    { name: 'a', sum: 38 },
  ];
  const topdonater = ALL_DONATERS.reduce(
    (max, donater) => (+donater.sum > +max.sum ? donater : max),
    ALL_DONATERS[0],
  );
  const lastdonation = ALL_DONATERS.pop();
  return (
    <div className="donaterspage">
      <div
        className={`donater__block donater__block__jumbotron donater__block__jumbotron__topdonat`}>
        <span className="donater__item__head">НАЙБІЛЬШИЙ ДОНАТ</span>
        <span className="donater__item">{topdonater.name}</span>
        <span className="donater__item">{topdonater.sum}</span>
      </div>
      <div
        className={`donater__block donater__block__jumbotron donater__block__jumbotron__lastdonat`}>
        <span className="donater__item__head">ОСТАННІЙ ДОНАТ</span>
        <span className="donater__item">{lastdonation.name}</span>
        <span className="donater__item">{lastdonation.sum}</span>
      </div>
      {ALL_DONATERS.map((person, index) => (
        <div className="donater__block" key={index}>
          <span className="donater__item">{person.name}</span>
          <span className="donater__item">{person.sum}</span>
        </div>
      ))}
    </div>
  );
}

export default DonatersPage;
