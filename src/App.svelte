<script lang="ts">
  let firstName = "Mario";
  let lastName = "Kart";
  let beltColor = "black"

  $: fullName = `${firstName} ${lastName}`;
  $: {
    console.log(beltColor)
    console.log(fullName)
  }
</script>

<main>
  <p>{fullName} - {beltColor} belt</p>
  <input type="text" bind:value={firstName}>
  <input type="text" bind:value={lastName}>
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

  /* img {
    height: 16rem;
    width: 16rem;
  } */

  /* h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  } */

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }


</style>
