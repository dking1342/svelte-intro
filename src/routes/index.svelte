<script context="module">
  import { fetchHook } from "../utils/fetchHook";
  // @ts-ignore
  export async function load({ fetch }) {
    const url = "https://rickandmortyapi.com/api/character";
    const { payload } = await fetchHook(url,fetch);

    return {
      props:{
        data:payload
      }
    }
  }
</script>

<script lang="ts">
  import "./global.css";
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
