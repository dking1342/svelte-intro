<script lang="ts">
  import { createEventDispatcher } from "svelte";
  
  let name: string = "";
  let beltColor: "black" | "brown" | "orange" | "white" | "" = "";
  let age: number;
  let skills: string[] | [] = [];
  let dispatch = createEventDispatcher();

  const handleSubmit = () => {
    const person = {
      name,
      beltColor,
      age,
      skills,
      id:Math.ceil(Math.random() * 10000)
    }
    dispatch("addPerson", person);
    
  };
</script>

<h3>Add new person</h3>
<form on:submit|preventDefault={handleSubmit} id="form">
  <input
    type="text"
    name="name"
    id="name"
    placeholder="name"
    bind:value={name}
  />
  <label for="beltColor">Belt Color</label>
  <select name="beltColor" id="beltColor" bind:value={beltColor}>
    <option value="null" selected disabled>Select a color</option>
    <option value="black">black</option>
    <option value="black">orange</option>
    <option value="black">brown</option>
    <option value="black">white</option>
  </select>
  <input type="number" min="0" bind:value={age} placeholder="age" />
  <div class="skills">
    <h3>Skills</h3>
    <div>
      <input
        type="checkbox"
        name="fighting"
        id="fighting"
        bind:group={skills}
        value="fighting"
      />
      <label for="fighting">Fighting</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="sneaking"
        id="sneaking"
        bind:group={skills}
        value="sneaking"
      />
      <label for="sneaking">Skills</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="running"
        id="running"
        bind:group={skills}
        value="running"
      />
      <label for="running">Running</label>
    </div>
  </div>

  <button type="submit">Add Person</button>
</form>

<style>
  h3 {
    margin:1.5rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding:1rem 2rem;
  }
  input,
  select {
    height: 45px;
    font-size: 18px;
    line-height: 45px;
    padding:0 10px;
  }
  .skills {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 10px 0;
    gap:5px;
  }
  .skills div {
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    gap:10px;
  }
  button {
    width: 100%;
    padding:15px 0;
    font-size: 1rem;
    background-color: rgb(34, 220, 55);
    border-radius: 5px;
    cursor: pointer;
    transition:ease all 500ms;
  }
  button:hover{
    filter:brightness(1.1);
    transition:ease all 500ms;
  }
</style>
