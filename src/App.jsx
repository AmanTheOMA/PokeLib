import React, { useState } from "react";
import { Header } from "./Components/Header";
import { SideNav } from "./Components/SideNav";
import { PokeCard } from "./Components/PokeCard";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(true);

  function HandleToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }

  function HandleClosedMenu() {
    setShowSideMenu(true);
  }

  return (
    <>
      <Header handleToggleMenu={HandleToggleMenu} />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        handleClosedMenu={HandleClosedMenu}
        showSideMenu={showSideMenu}
      />
      <PokeCard
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </>
  );
}

export default App;
