<script lang="ts">
  interface People {
    name: string;
    beltColor: string;
    age:number;
    id:number;
  }

  let people:People[] = [
    { name:"yoshi", beltColor:"black",age:25,id:1},
    { name:"mario", beltColor:"orange",age:45,id:2},
    { name:"luigi", beltColor:"brown",age:35,id:3},
  ];
</script>

<main>
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      <p>{person.age} years old, {person.beltColor} belt</p>
    </div>
  {:else}
    <p>There are no people to show...</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    max-width: 240px;
  }
</style>
