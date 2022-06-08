<script>
  let count = 0;

  const increment = () => (count += 1);
  const decrement = () => (count -= 1);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="/about">about</a> route
</p>
<h3>Number: {count}</h3>
<button on:click={increment}>increment</button>
<button on:click={decrement}>decrement</button>

<style>
  p {
    font-size: 2rem;
  }
</style>
