import { writable } from "svelte/store";
import type { FormPollType } from "../tslib/FormTypes";

const PollStore = writable<FormPollType[]>([
  {
    id:1,
    question:"Python or Javascript?",
    answerA:"Python",
    answerB:"Javascript",
    votesA:9,
    votesB:15
  }
]);

export default PollStore;