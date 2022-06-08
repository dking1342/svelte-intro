<script context="module">
  // @ts-ignore
  export async function load({ fetch }) {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (response.ok) {
      const data = await response.json();
      return {
        props: {
          data,
        },
      };
    } else {
      return {
        props: {
          data: {},
        },
      };
    }
  }
</script>

<script lang="ts">
  import CharacterList from "../components/CharacterList.svelte";
  import type { Characters } from "src/types/characters";
  export let data: Characters;
  export let characters = data.results;
</script>

<main>
  <CharacterList {characters} />
</main>

<style>
</style>
