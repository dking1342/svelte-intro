<script context="module">
  import { fetchHook } from "../../utils/fetchHook";
  // @ts-ignore
  export async function load({ fetch, params }) {
    const url = `https://rickandmortyapi.com/api/character?name=${params.id}`;
    const { payload } = await fetchHook(url,fetch);

    return {
      props:{
        data:payload
      }
    }
  }

</script>

<script lang="ts">
  import type { Characters } from "../../types/characters"; 
  import CharacterList from "../../components/CharacterList.svelte";
  export let data:Characters;
  export let characters = data.results;
</script>

<main>
  <section class="container">
    <CharacterList {characters} />
  </section>
</main>


<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->