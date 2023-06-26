const Home = async () => {
  const pokemon = await fetch("https://pokemon-jsonfile-api.vercel.app/api/pokemon/")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <main>
      Pokemon List:
      <ul>
        {pokemon?.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
