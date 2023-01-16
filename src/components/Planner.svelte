<script lang="ts">
  import { onMount } from 'svelte';

  let input: string = '';
  const options = ['Health', 'Personal', 'Finances', 'Relationship', 'Education', 'Career', 'Leisure'];
  let sortedArray:string[] = new Array();
  let category: string = '';

  function handleSelect(option: string) {
    category = option;
  }

  onMount(() => {
    // Sort the categories alphabetically
    return sortedArray = [...options].sort();
  });

</script>

<div>
  <h3>Please enter a goal:</h3>
  <input bind:value={input} placeholder="Enter goal here" />
  
  <h3>Please select a category for this goal:</h3>
  <select bind:value={category} on:change={() => handleSelect}>
    {#each sortedArray as option}
      <option value={option}>
        {option}
      </option>
    {/each}
  </select>
  
  <div>
    <h3>Your goal is: { input }</h3>
    <h3>Selected category: {category}</h3>
  </div>
</div>

<style>

</style>