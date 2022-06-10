<script lang="ts">
  import { createEventDispatcher } from "svelte/internal";
  import PollStore from "../stores/stores";
  import { ButtonType } from "../tslib/ButtonEnum";
  import type { FormPollType, PollType } from "../tslib/FormTypes";
  import Button from "./Button.svelte";
  import FormField from "./FormField.svelte";

  const dispatch = createEventDispatcher();
  let fieldResults: PollType[] = [
    {
      value: "",
      errors: "",
      styles: false,
      name: "question",
      labelTitle: "Poll Question",
    },
    {
      value: "",
      errors: "",
      styles: false,
      name: "answerA",
      labelTitle: "Answer A:",
    },
    {
      value: "",
      errors: "",
      styles: false,
      name: "answerB",
      labelTitle: "Answer B:",
    },
  ];

  const handleChange = (e) => {
    if (e.detail.target.value.trim().length < 1) {
      fieldResults = fieldResults.map((item) => {
        if (item.name === e.detail.target.name) {
          return {
            ...item,
            errors: "Field cannot be empty",
            styles: false,
          };
        }
        return item;
      });
    } else {
      fieldResults = fieldResults.map((item) => {
        if (item.name === e.detail.target.name) {
          return {
            ...item,
            errors: "",
            styles: true,
          };
        }
        return item;
      });
    }
  };

  const handleSubmit = () => {
    if (fieldResults.every((val) => val.styles)) {
      const poll: FormPollType = {
        question: fieldResults[0].value,
        answerA: fieldResults[1].value,
        answerB: fieldResults[2].value,
        votesA: 0,
        votesB: 0,
        id: Math.ceil(Math.random() * 100000),
      };
      $PollStore = [poll, ...$PollStore];

      dispatch("addPoll", null);

      // reset state
      fieldResults = fieldResults.map((item) => {
        return {
          ...item,
          value: "",
          errors: "",
          styles: false,
        };
      });
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  {#each fieldResults as poll}
    <FormField {poll} on:handleChange={handleChange} />
  {/each}
  {#if fieldResults.every((val) => val.styles)}
    <Button type={ButtonType.SECONDARY} flat={true}>Add Post</Button>
  {/if}
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
</style>
