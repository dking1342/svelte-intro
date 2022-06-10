<script lang="ts">
  import { tweened } from "svelte/motion";
  import PollStore from "../stores/stores";
  import type { FormPollType } from "../tslib/FormTypes";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";

  export let poll:FormPollType;

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0;
  $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0;

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleVote = (option,id) => {
    PollStore.update(currentState => {
      return currentState.map(poll => {
        if(poll.id === Number(id)){
          let votesForA = poll.votesA;
          let votesForB = poll.votesB;
          option === "a" ? votesForA += 1 : votesForB += 1;
          return {
            ...poll,
            votesA:votesForA,
            votesB:votesForB
          }
        }
        return poll;
      })
    })
	}

  const handleDelete = (id) => {
    PollStore.update(currentState => {
      return currentState.filter(poll => poll.id !== id);
    })
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <div class="answer" on:click={()=>handleVote("a",poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%;"></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={()=>handleVote("b",poll.id)}>
      <div class="percent percent-b" style="width: {$tweenedB}%;"></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
  <div class="delete">
    <Button flat={true} on:click={()=>handleDelete(poll.id)}>
      Delete
    </Button>
  </div>
</Card>

<style>
  h3 {
    margin:0 auto;
    color:#555;
  }
  p{
    margin-top: 6px;
    font-size: 14px;
    color:#aaa;
    margin-bottom: 30px;
  }
  .answer{
    background-color: #fafafa;
    cursor: pointer;
    margin:10px auto;
    position: relative;
  }
  .answer:hover{
    opacity:0.6;
  }
  span{
    display: inline-block;
    padding:10px 20px;
  }
  .percent{
    height: 100%;
    position:absolute;
    inset: 0;
  }
  .percent-a{
    border-left: 4px solid #d91b42;
    background-color: rgba(217, 27, 66, 0.2);
  }
  .percent-b{
    border-left: 4px solid #45c469;
    background-color: rgba(69, 196, 150, 0.2);
  }
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>

