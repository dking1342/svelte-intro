<script>
  import { FeedbackStore } from "../stores";
  import FeedbackItem from "./FeedbackItem.svelte";

</script>

{#each $FeedbackStore as fb (fb.id)}
  <FeedbackItem item={fb} on:delete-feedback />
{/each}

<style>
  /* your styles go here */
</style>

