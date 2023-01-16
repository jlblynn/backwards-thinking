<script lang="ts">
  // npm install svelte-drag-and-drop-actions
  import { draggable } from 'svelte-drag-and-drop-actions';
  // Initialize a variable to store the user's input
  let input: string = '';

  // Handle the input event when the user types in the input field
  function handleInput(event: InputEvent) {
      input = (event.target as HTMLInputElement).value;
  }
  // assign the draggable function to the element
  const makeDraggable = draggable();
</script>

<!-- Render the input field and the draggable element -->
<input type="text" bind:value={input} on:input={handleInput} placeholder="Enter text here" />

<div class="draggable-element" {makeDraggable}>
      {input}
</div>

<style>
  /* Add some styling to the draggable element */
  .draggable-element {
      padding: 10px;
      background-color: lightblue;
      border-radius: 5px;
  }
</style>