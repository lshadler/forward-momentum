<script>
	import GoogleAnalytics from 'sapper-google-analytics/GoogleAnalytics.svelte';
	import { stores } from '@sapper/app';
	import Nav from '../components/Nav.svelte';
	
	export let segment;
	const ga_measurment_id = 'UA-161523112-2';

</script>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: white;
		padding: 2em;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>
<GoogleAnalytics {stores} id={ga_measurment_id}/>

<main>
	<slot></slot>
</main>