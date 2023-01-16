<script lang="ts">
  import Name from "../components/Name.svelte";
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
    <p>No name...</p>
  {:else}
    <p>Please enter a goal, {nameValue}...</p>
  {/if}
</main>


