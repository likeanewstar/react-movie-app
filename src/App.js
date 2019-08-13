import React from 'react';
import PropTypes from 'prop-types';

const SongILike = [
  {
    id: 1,
    title: 'I',
    art: 'http://image.yes24.com/momo/TopCate678/MidCate004/67730885.jpg',
    ratings: 5.0
  },
  {
    id: 2,
    title: 'Why',
    art: 'http://image.yes24.com/momo/TopCate851/MidCate009/84865363.jpg',
    ratings: 5.0
  },
  {
    id: 3,
title: 'Fine',
art: 'http://image.yes24.com/momo/TopCate1099/MidCate009/108618000.jpg',
ratings: 5.0
  },
  {
    id: 4,
    title: 'Something New',
    art: 'http://image.yes24.com/Goods/61508337/800x0',
    ratings: 5.0
  },
];

function Song({ title, albumart, ratings }) {
  return <div>
    <h2>My favorite song is {title}.</h2>
    <h4>{ratings} / 5.0</h4>
    <img src={albumart} alt={title} />
  </div>
}

Song.propTypes = {
  title: PropTypes.string.isRequired,
  albumart: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {SongILike.map(song => (
        <Song key={song.id} title={song.title} albumart={song.art} ratings={song.ratings} />
      ))}
    </div>
  );
}

export default App;
