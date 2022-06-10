<script lang="ts">
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import Footer from "./components/Footer.svelte";
	import Header from "./components/Header.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./components/Tabs.svelte";
	import PollStore from "./stores/stores";
	import { PollTabs } from "./tslib/PollEnum";

	let items = [PollTabs.CURRENT_POLLS, PollTabs.ADD_NEW_POLL];
	let activeItem = PollTabs.CURRENT_POLLS;

	const tabChange = (e) => {
		activeItem = e.detail;
	}

	const handleAddPoll = (e) => {
		activeItem = PollTabs.CURRENT_POLLS;
	}
</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === PollTabs.CURRENT_POLLS}
		<PollList />
	{:else}
		<CreatePollForm on:addPoll={handleAddPoll} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin:40px auto;
	}
</style>