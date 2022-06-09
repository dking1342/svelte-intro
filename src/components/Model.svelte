<script lang="ts">
  let showModal = true;
  let isPromo = true;
</script>

{#if showModal}
  <div class="backdrop" class:promo={isPromo}>
    <div class="modal">
      <p>Sign up for offers</p>
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
