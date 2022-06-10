<script lang="ts">
  import type { FormPollType } from "../tslib/FormTypes";

  export let polls:FormPollType[] = [];
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
     <div>{poll.question}</div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;
  }
</style>

<!-- markup (zero or more items) goes here -->