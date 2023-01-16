<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Icon } from '@steeze-ui/svelte-icon'
  import { Home, FaceSmile, FaceFrown } from '@steeze-ui/heroicons'

  import { selected } from '../store/store';

  let unsubscribe: () => void;
  let active:string = "home";

  function setActive(newActive:string) {
    active = newActive;
    selected.set(newActive);
  }

  onMount(() => {
		unsubscribe = selected.subscribe((value) => {
      active = value;
    });
	});

  onDestroy(() => {
		if(unsubscribe) unsubscribe();
	});
  
</script>

<div class="fixed left-0 top-0 bottom-0 h-full w-33 flex flex-col bg-surface text-white shadow-lg items-center z-10">
    
  <div class="sidebar-icon group">
    <a href="/" on:click={() => setActive("home")} class:selected={active === "home"}>
      <Icon src={Home} theme='outline'  class='w-12 h-12 my-3 hover:bg-secondary' />
    </a>
  </div>
  <div class="sidebar-icon group">
    <a href="#about" on:click={() => setActive("about")} class:selected={active === "about"}>
      <Icon src={FaceSmile} theme='outline' class='w-12 h-12 my-3 hover:bg-secondary' />
    </a>
  </div>
  <div class="sidebar-icon group">
    <a href="#contact" on:click={() => setActive("contact")} class:selected={active === "contact"}>
      <Icon src={FaceFrown} theme='outline' class='w-12 h-12 my-3 hover:bg-secondary' />
    </a>
  </div>

</div>

<style>
  .selected {
    color: #0FBA81;
  }

</style>