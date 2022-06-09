<script lang="ts">
  export let isPromo:boolean = false;
  export let message:string = "default value";
  export let showModal = false;

</script>

{#if showModal}
  <div class="backdrop" class:promo={isPromo} on:click>
    <div class="modal">
      <p>{message}</p>
    </div>
  </div>
{/if}


<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position:fixed;
    inset:0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .promo .modal {
    background-color: #dc143c;
    color:#fff;
  }
  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin:10% auto;
    text-align: center;
    background-color: #fff;
  }
</style>
