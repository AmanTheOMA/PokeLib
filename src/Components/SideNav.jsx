import { first151Pokemon, getFullPokedexNumber } from "../utils";
import { useState } from "react";

export function SideNav(props) {
  const {
    selectedPokemon,
    setSelectedPokemon,
    handleClosedMenu,
    showSideMenu,
  } = props;
  const [searchValue, setSearchValue] = useState("");

  const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
    if (getFullPokedexNumber(eleIndex).includes(searchValue)) {
      return true;
    }
    if (ele.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <nav className={" " + (!showSideMenu ? " open" : "")}>
      <div className={"header " + (!showSideMenu ? " open" : "")}>
        <button onClick={handleClosedMenu} className="open-nav-button">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h1 className="text-gradient">PokeLib</h1>
      </div>
      <input
        placeholder="E.g. 025 or Pikachu"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {filteredPokemon.map((pokemon, pokemonIndex) => {
        return (
          <button
            onClick={() => {
              setSelectedPokemon(first151Pokemon.indexOf(pokemon));
              handleClosedMenu();
            }}
            key={pokemonIndex}
            className={
              "nav-card" +
              (pokemonIndex === selectedPokemon ? "nav-card-selected" : " ")
            }
          >
            <p>{getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
