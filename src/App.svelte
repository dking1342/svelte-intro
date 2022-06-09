<script lang="ts">
  let name = "Mario";
  let beltColor = "black"

  const handleChange = () => {
    beltColor = "orange";
  }

  const handleInput = (e) => {
    beltColor = e.target.value;
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <p style="color:{beltColor}">{beltColor} belt</p>



  <button on:click={handleChange}>Update belt color</button>
  <!-- one way data bind -->
  <!-- <input type="text" on:input={handleInput} value={beltColor}> -->
  
  <!-- two way data bind -->
  <input type="text" bind:value={beltColor}>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
