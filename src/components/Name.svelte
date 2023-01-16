<script lang="ts">
  import { onMount } from "svelte";
  import { name } from "../store/store";

  let currentName:string;
  let newName:string;
  let hasName = false;

  onMount(async () => {
    const unsubscribe = name.subscribe((value:string) => {
      currentName = value;
      hasName = !!currentName;
    });
    return () => unsubscribe();
  });

  function handleSubmit() {
    name.set(newName);
  }

  function removeName() {
    name.set("");
    newName = "";
  }
</script>

<div>
  {#if !hasName}
    <h2>Welcome, please enter your name</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <label>
        Name:
        <input type="text" class="border-primary-300 focus:border-secondary-400 rounded-lg" bind:value={newName} />
      </label>
      <button class="btn-green w-16 rounded-lg" type="submit">Submit</button>
    </form>
  {:else}
    <p>Hello, {currentName}!</p>
    <button class="btn-blue w-16 rounded-lg" on:click={removeName}>Sign Out</button>
  {/if}
</div>

<style>

</style>
