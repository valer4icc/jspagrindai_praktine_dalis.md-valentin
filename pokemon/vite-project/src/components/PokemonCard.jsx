export default function PokemonCard({ pokemon }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      width: "140px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img src={pokemon.img} alt={pokemon.name} width="96" />
      <h4 style={{ margin: "5px 0" }}>{pokemon.name}</h4>
      <div>❤️ {pokemon.hp} hp</div>
    </div>
  );
}
 