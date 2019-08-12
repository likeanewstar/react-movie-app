import React from 'react';

const SongILike = [
  {
    id: 1,
    title: 'I',
    art: 'http://image.yes24.com/momo/TopCate678/MidCate004/67730885.jpg'
  },
  {
    id: 2,
    title: 'Why',
    art: 'http://image.yes24.com/momo/TopCate851/MidCate009/84865363.jpg'
  },
  {
    id: 3,
title: 'Fine',
art: 'http://image.yes24.com/momo/TopCate1099/MidCate009/108618000.jpg'
  },
  {
    id: 4,
    title: 'Something New',
    art: 'http://image.yes24.com/Goods/61508337/800x0'
  },
];

function Song({ title, albumart }) {
  return <div>
    <h2>My favorite song is {title}.</h2>
    <img src={albumart} alt={title} />
  </div>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {SongILike.map(song => (
        <Song key={song.id} title={song.title} albumart={song.art} />
      ))}
    </div>
  );
}

export default App;
