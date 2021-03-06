<script>
    import { goto } from '@sapper/app';
    import DistrictForm from '../components/DistrictForm.svelte';

    async function onSubmit(state, district) {
      await goto(`representatives/${state.toLowerCase()}?rep_id=${district.toLowerCase()}`);
    }

const seoDescription = 'Find your district representative using a map of the United States districts';
const seoTitle = 'United States District Map';
const seoKeywords = [
      'state',
      'congress',
      'representatives',
      'government',
      'US',
      'District',
      'Map',
].join(',');
const seoUrl = 'https://whoaremyrepresentatives.us/district-map';
// TODO: add state-level seo image
const seoImage = 'flag.png';
</script>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription} />
  <meta name="keywords" content={seoKeywords}/>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content={seoUrl}>
  <meta property="og:title" content={seoTitle}>
  <meta property="og:description" content={seoDescription}>
  {#if seoImage}
  <meta property="og:image" content="{seoImage}">
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary">
  <meta property="twitter:url" content={seoUrl}>
  <meta property="twitter:title" content={seoTitle}>
  <meta property="twitter:description" content={seoDescription}>
  {#if seoImage}
  <meta property="twitter:image" content="{seoImage}">
  {/if}
</svelte:head>


<h1 class="block w-full text-center text-grey-darkest mb-6 text-5xl" data-automation="district-map-title">District Map</h1>

<p class="text-lg">We have embedded a map from GovTrack in order to support clarity on who your representatives are. If you want a more accurate idea of what your representative is involved in, please follow the instructions immediately following the map.</p>


<iframe title="district map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
src="https://www.govtrack.us/congress/members/embed/mapframe?&bounds=-158.518,57.386,-18.119,9.295"></iframe>


<div class="my-2 rounded-md mb-6 bg-democrat text-lg text-white font-semibold p-4 lg:px-4">
  <p class="w-full text-center text-xl mb-4">To find more info on your representative, please try the following:</p>
  <ul class="list-disc list-inside">
      <li>Locate your residence on the map</li>
      <li>Fill out the form below with your state code and district number</li>
      <li>Click 'Show Representative' to navigate to your representative</li>
  </ul>
</div>

<DistrictForm {onSubmit} />

<style>
    iframe {
        margin: 20px;
        width: 100%;
        max-width: 800px;
        height: 400px; 
    }
</style>