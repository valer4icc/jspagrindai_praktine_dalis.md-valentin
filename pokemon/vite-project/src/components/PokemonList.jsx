import { useState } from "react";
import data from "../data/pokedex.json";
import PokemonCard from "./PokemonCard";
 
export default function PokemonList() {
  const [pokemons, setPokemons] = useState(data.pokemon);
 
  const [search, setSearch] = useState("");
 
  const [form, setForm] = useState({
    name: "",
    hp: "",
    frontImg: "",
    backImg: ""
  });
 
  function handleFormChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
 
  function handleSubmit(e) {
    e.preventDefault();
 
    if (!form.name || !form.hp || !form.frontImg) return;
 
    const newPokemon = {
      id: Date.now().toString(),
      name: form.name,
      hp: Number(form.hp),
      img: form.frontImg,
      backImg: form.backImg || form.frontImg,
      type: ["Custom"]
    };
 
    setPokemons([newPokemon, ...pokemons]);
 
    setForm({ name: "", hp: "", frontImg: "", backImg: "" });
  }
 
  const filtered = pokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokemon Searcher</h1>

      <h2 style={{ textAlign: "center" }}>Add a Pokemon!</h2>
 
      <form onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px"
        }}>
 
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleFormChange}
        />
 
        <input
          name="hp"
          placeholder="hp"
          type="number"
          value={form.hp}
          onChange={handleFormChange}
        />
 
        <input
          name="frontImg"
          placeholder="Front Image URL"
          value={form.frontImg}
          onChange={handleFormChange}
        />
 
        <input
          name="backImg"
          placeholder="Back Image URL"
          value={form.backImg}
          onChange={handleFormChange}
        />
 
        <button type="submit">Submit</button>
      </form>
 

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center"
      }}>
        {filtered.map(p => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
 