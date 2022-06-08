<script lang="ts">
  import type { CharacterResults } from "../types/characters";
  import CharacterCard from "./CharacterCard.svelte";
  export let characters: CharacterResults[];
</script>

<section class="container">
  <h3>Rick and Morty Characters</h3>
  <div class="popular-movies">
    {#each characters as character}
      <CharacterCard {character} />
    {/each}
  </div>
</section>

<style>
  .container {
    margin-top: 25px;
  }
  h3 {
    padding: 0 1rem;
  }
  .popular-movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem 1rem;
  }
</style>
