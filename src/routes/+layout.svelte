<script>
  import "../app.css";
  import SideBar from "../components/SideBar.svelte";
</script>

<nav>
  <SideBar />
</nav>
<main class="h-screen flex flex-col mx-12 px-3 py-3">
  <slot />
</main>