<script>
  import global from "../routes/global.css";

</script>

<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>
<slot />

<style>
  nav{
    width: 100vw;
    height: 50px;
    background-color: black;
    opacity: 0.65;
    color:white;
    padding:0 11%;
    position:fixed;
    margin-top: -75px;
  }
  ul{
    width: 100%;
    height: 100%;
    display: flex;
  }
  li{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding:0 20px;
  }
</style>

