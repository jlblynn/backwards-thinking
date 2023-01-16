<script lang="ts">
  import Name from "../components/Name.svelte";
  import Planner from "../components/Planner.svelte";
  import { name } from "../store/store";
 
  let nameValue: string | undefined;
  name.subscribe(value => {
    nameValue = value;
  });
  
  $: if (!nameValue) {
    console.log('Name is empty');
  } else {
    console.log('Name is not empty');
  }

</script>

<main class="relative">
  <Name />
  {#if !nameValue}
    <p>Please enter your name...</p>
  {:else}
    <h2>Time to plan your goals, <strong>{nameValue}</strong>.</h2>
    <Planner />
  {/if}
</main>


