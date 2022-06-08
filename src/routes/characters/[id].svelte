<script context="module">
  // @ts-ignore
  export const load = async ({ fetch, params }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${params.id}`
    );
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
  };
</script>

<script lang="ts">
  import type { CharacterResults } from "../../types/characters";
  export let data: CharacterResults;
</script>

<div class="movie-details">
  <div class="img-container">
    <img src={data.image} alt={data.name} />
  </div>
  <div class="txt-container">
    <h1>{data.name}</h1>
    <p class="overview">
      This character is a species of {data.species}. The
      origin of this character is {data.origin.name}. The current status of this
      character is {data.status}. The gender of this character is {data.gender}.
      They are currently located in {data.location.name}.
    </p>
    <p><span>Created Date </span> { new Date(data.created).toLocaleDateString()}</p>
  </div>
  <a href="/">Go Back</a>
</div>

<style>
  h1{
    padding:1rem 0 2rem;
  }
  p {
    padding:1rem 0;
  }
  .img-container{
    width: 100%;
  }
  img{
    width: 100%;
    border-radius: 1rem;
  }
  .movie-details{
    margin:2rem 20%;
  }
  span{
    font-weight: bold;
  }
</style>
