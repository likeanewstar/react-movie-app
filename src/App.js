import React from 'react';

function Song({ title, albumart }) {
  return <div>
    <h2>My favorite song is {title}.</h2>
    <img src={albumart} alt={title} />
  </div>
  
}

const SongILike = [
  {
    title: 'I',
    art: 'http://image.yes24.com/momo/TopCate678/MidCate004/67730885.jpg'
  },
  {
    title: 'Why',
    art: 'http://image.yes24.com/momo/TopCate851/MidCate009/84865363.jpg'
  },
  {
title: 'Fine',
art: 'http://image.yes24.com/momo/TopCate1099/MidCate009/108618000.jpg'
  },
  {
    title: 'Something New',
    art: 'http://image.yes24.com/Goods/61508337/800x0'
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {SongILike.map(song => (
        <Song title={song.title} albumart={song.art} />
      ))}
    </div>
  );
}

export default App;
