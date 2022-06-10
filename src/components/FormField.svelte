<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { PollType } from "../tslib/FormTypes";

  export let poll:PollType;
  const dispatch = createEventDispatcher();
</script>

<div class="form-field">
  <label for={poll.name}>{poll.labelTitle}</label>
  <input
    type="text"
    name={poll.name}
    id={poll.name}
    bind:value={poll.value}
    on:blur={(e) => dispatch("handleChange",e)}
    />
  {#if poll.errors}
    <p class="error">{poll.errors}</p>
  {:else if poll.styles}
    <p class="success">Valid ✅</p>
  {/if}
</div>


<style>
  .form-field {
    margin: 18px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  input {
    width: 100%;
    border-radius: 6px;
    height: 40px;
    font-size: 18px;
    padding: 0 10px;
    border: 0.5px solid #555;
  }
  .error {
    font-size: 12px;
    color: #ff0000;
  }
  .success {
    color: green;
    font-size: 12px;
  }
</style>
