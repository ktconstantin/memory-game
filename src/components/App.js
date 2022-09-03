import React from 'react';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';
import Grid from './Grid.js';
import barbarian from '../img/DnD/barbarian.png';
import bard from '../img/DnD/bard.png';
import cleric from '../img/DnD/cleric.png';
import druid from '../img/DnD/druid.png';
import fighter from '../img/DnD/fighter.png';
import monk from '../img/DnD/monk.png';
import paladin from '../img/DnD/paladin.png';
import ranger from '../img/DnD/ranger.png';
import rogue from '../img/DnD/rogue.png';
import sorcerer from '../img/DnD/sorcerer.png';
import warlock from '../img/DnD/warlock.png';
import wizard from '../img/DnD/wizard.png';

function App() {
  return (
    <div className="app">
      <Grid imgData={imgData} />
    </div>
    
  );
}

const imgData = [
  {
    id: uuidv4(),
    src: barbarian,
    name: 'Barbarian',
    alt: 'male barbarian wearing fur armor and wielding an axe',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: bard,
    name: 'Bard',
    alt: 'female elven bard carrying a lute',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: cleric,
    name: 'Cleric',
    alt: 'armored dwarven cleric wielding a warhammer',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: druid,
    name: 'Druid',
    alt: 'male elven druid with hawk companion',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: fighter,
    name: 'Fighter',
    alt: 'male fighter with sword, spear, and shield',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: monk,
    name: 'Monk',
    alt: 'female monk using stunning strike',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: paladin,
    name: 'Paladin',
    alt: 'half-orc paladin in heavy armor wielding sword and shield',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: ranger,
    name: 'Ranger',
    alt: 'female elven ranger wielding longbow',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: rogue,
    name: 'Rogue',
    alt: 'male dark elf rogue dual-wielding daggers',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: sorcerer,
    name: 'Sorcerer',
    alt: 'sorcerer casting incendiary cloud',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: warlock,
    name: 'Warlock',
    alt: 'female warlock carrying a talisman',
    clicked: false,
  },
  {
    id: uuidv4(),
    src: wizard,
    name: 'Wizard',
    alt: 'male wizard with a staff and a satchel',
    clicked: false,
  },
];

export default App;
