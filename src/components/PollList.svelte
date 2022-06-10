<script lang="ts">
  import PollStore from "../stores/stores";
  import PollDetails from "./PollDetails.svelte";
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
     <div>
       <PollDetails {poll} />
     </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;
  }
</style>
