<script>
  import { FeedbackStore } from "../stores";


  $: count = $FeedbackStore.length;
  $: average = $FeedbackStore.reduce(
    (acc, { rating }, i, array) =>
      i === array.length - 1 ? (acc + rating) / array.length : acc + rating,
    0
  );

</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {Number.isInteger(average) ? average : average.toFixed(1)}</h4>
</div>

<style>
    .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
