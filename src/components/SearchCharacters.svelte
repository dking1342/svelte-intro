<script>
  import { goto } from "$app/navigation";
  let searchValue = "";

  const handleSubmit = () => {
    let href=`/search/${searchValue}`;
    goto(href);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-control">
    <input
      bind:value={searchValue}
      type="text"
      name="search"
      id="search"
      placeholder="Search Characters"
    />
    <input type="submit" value="Search" />
  </div>
</form>

<style>
  form {
    width: 100%;
    height: 50px;
  }
  .form-control {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
  }
  .form-control > * {
    height: 100%;
  }
  .form-control input[type="text"] {
    width: 400px;
    font-size: 1.25rem;
    padding-left: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: none;
    border: none;
  }
  .form-control input[type="submit"] {
    font-size: 0.7rem;
    padding: 0 1rem;
    background-color: rgb(96, 110, 201);
    color: #fff;
    font-weight: bold;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }
</style>
