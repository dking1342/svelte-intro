<script lang="ts">
	import Footer from "./components/Footer.svelte";
	import Header from "./components/Header.svelte";
	import Tabs from "./components/Tabs.svelte";
	import { PollTabs } from "./tslib/PollEnum";



	let items = [PollTabs.CURRENT_POLLS, PollTabs.ADD_NEW_POLL];
	let activeItem = PollTabs.CURRENT_POLLS;
	
	const tabChange = (e) => {
		activeItem = e.detail;
	}

</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === PollTabs.CURRENT_POLLS}
		 <p>{ PollTabs.CURRENT_POLLS}</p>
	{:else}
		<p>{ PollTabs.ADD_NEW_POLL} </p>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin:40px auto;
	}
</style>