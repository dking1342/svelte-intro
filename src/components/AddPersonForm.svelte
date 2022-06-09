<script lang="ts">
  let name: string = "";
  let beltColor: "black" | "brown" | "orange" | "white" | "" = "";
  let age: number;
  // let hasFighting:boolean = false;
  // let hasSneaking:boolean = false;
  // let hasRunning:boolean = false;
  let skills: string[] = [];

  const handleSubmit = () => {
    console.log(name, beltColor, age, skills);
  };
</script>

<h3>Add new person</h3>
<form on:submit|preventDefault={handleSubmit}>
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
  <!-- <input
    type="text"
    name="beltColor"
    id="beltColor"
    placeholder="belt color"
    bind:value={beltColor}
  /> -->
  <input type="number" min="0" bind:value={age} placeholder="age" />
  <h3>Skills</h3>
  <!-- <div>
    <input type="checkbox" name="fighting" id="fighting" bind:checked={hasFighting}>
    <label for="fighting">Fighting</label>
  </div>
  <div>
    <input type="checkbox" name="sneaking" id="sneaking" bind:checked={hasSneaking}>
    <label for="sneaking">Skills</label>
  </div>
  <div>
    <input type="checkbox" name="running" id="running" bind:checked={hasRunning}>
    <label for="running">Running</label>
  </div> -->
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

  <button type="submit">Add Person</button>
</form>

<!-- markup (zero or more items) goes here -->
<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
