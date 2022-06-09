<script lang="ts">
  import type { FormPollType } from "../tslib/FormTypes";

  let fields: FormPollType = {
    question: "",
    answerA: "",
    answerB: "",
  };

  const handleSubmit = () => {
    console.log(fields);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input
      type="text"
      name="question"
      id="question"
      bind:value={fields.question}
    />
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input
      type="text"
      name="answer-a"
      id="answer-a"
      bind:value={fields.answerA}
    />
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input
      type="text"
      name="answer-b"
      id="answer-b"
      bind:value={fields.answerB}
    />
  </div>
  <button>Add Poll</button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:12px;
  }
  input {
    width: 100%;
    border-radius: 6px;
    height: 40px;
    font-size: 18px;
    padding:0 10px;
    border:0.5px solid #555;
  }
  
</style>
