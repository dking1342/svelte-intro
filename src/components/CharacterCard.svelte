<script lang="ts">
  import type { CharacterResults } from "../types/characters";

  export let character: CharacterResults;
</script>

<div class="movie-card">
  <a href={`/characters/${character.id}`}>
    <img src={character.image} alt={character.name} />
    <div class="description">
      <h2>{character.name}</h2>
      <p>{new Date(character.created).toLocaleDateString()}</p>
    </div>
  </a>
</div>

<style>
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 0.9rem;
  }
  .description {
    height: 5vh;
  }
  p {
    font-size: 0.9rem;
  }
  .movie-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
  }
</style>
