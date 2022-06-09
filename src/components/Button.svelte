<script lang="ts">
import { ButtonType } from "../tslib/ButtonEnum";


  export let type:ButtonType = ButtonType.PRIMARY;
  export let flat:boolean = false;
  export let inverse:boolean = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
  <slot></slot>
</button>

<style>
  button {
    border:0;
    cursor: pointer;
    border-radius: 6px;
    padding:8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background-color: #d91b42;
    color:#fff;
  }
  .secondary {
    background-color: #45c496;
    color:#fff;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color:#d91b42;
    background-color: #fff;
    border: 2px solid #d91b42;    
  }
  .secondary.inverse {
    color:#45c496;
    background-color: #fff;
    border:2px solid #45c496;
  }
</style>

