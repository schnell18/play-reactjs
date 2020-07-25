import React from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="contacts">

      <ContactCard
        name="Mr. Whiskerson"
        imageUrl="http://placekitten.com/300/200"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />

      <ContactCard
        name="Fluffykins"
        imageUrl="http://placekitten.com/400/200"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />

      <ContactCard
        name="Destroyer"
        imageUrl="http://placekitten.com/400/300"
        phone="(212) 555-4567"
        email="ofwoorly@yahoo.com"
      />

      <ContactCard
        name="Felix"
        imageUrl="http://placekitten.com/200/100"
        phone="(212) 555-5567"
        email="thecat@hotmail.com"
      />

    </div>
  );
}

export default App;
