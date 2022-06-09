<script lang="ts">
  import AddPersonForm from "./components/AddPersonForm.svelte";
import Modal from "./components/Model.svelte";
  interface People {
    name: string;
    beltColor: string;
    age: number;
    skills?:string[];
    id: number;
  }

  let people: People[] = [
    { name: "yoshi", beltColor: "black", age: 25, id: 1 },
    { name: "mario", beltColor: "orange", age: 45, id: 2 },
    { name: "luigi", beltColor: "brown", age: 35, id: 3 },
  ];

  let showModal = false;

  const handleDelete = (id) => {
    people = people.filter((person) => person.id !== id);
  };

  const toggleModal = () => {
    showModal = !showModal;
  }

  const addPerson = (e) => {
    const person = e.detail;
    people = [person, ...people];
    showModal = false;
  }
</script>

<Modal
  {showModal} 
  on:click={toggleModal}
>
  <AddPersonForm on:addPerson={addPerson} />
</Modal>
<main>
  <button on:click={toggleModal}>Open Modal</button>
  <section>
    {#each people as person (person.id)}
      <div class="person">
        <h4>{person.name}</h4>
        {#if person.beltColor === "black"}
          <p><strong>Master Ninja</strong></p>
        {/if}
        <p>{person.age} years old, {person.beltColor} belt</p>
        {#if person.skills?.length}
          <h3>Skills</h3>
          <p>{ person.skills.join(", ")}</p>
        {/if}
        <button on:click={() => handleDelete(person.id)}>Delete</button>
      </div>
    {:else}
      <p>There are no people to show...</p>
    {/each}
  </section>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  section {
    margin-top: 2rem;
    width: 75%;
    padding:2rem;
    background-color: transparent;
    color:#fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap:3rem;
  }
  .person {
    width: 100%;
    height: fit-content;
    padding:25px;
    display: flex;
    flex-direction: column;
    gap:10px;
    background-color: rgba(200, 200, 200, 0.15);
    color:#000;
    border-radius: 10px;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1), -3px -3px 12px rgba(0,0,0,0.1);
  }
  button{
    width: 100%;
    padding:15px 0;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: rgb(255, 56, 56);
    color:#fff;
    border-radius: 5px;
    cursor: pointer;
    transition: ease all 500ms;
  }
  button:hover {
    filter:brightness(1.1);
    transition:ease all 500ms;
  }
</style>
