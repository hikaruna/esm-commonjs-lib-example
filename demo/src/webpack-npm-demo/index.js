const { PocketMonster, Monster } = require('@hikaruna/pocket-monster');

window.onload = () => {
  const pocketMonster = document.querySelector('pocket-monster');
  pocketMonster.monster = new Monster({ name: 'hitokage' });
}
