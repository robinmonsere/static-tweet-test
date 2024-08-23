<script>
	import Tweet from '$lib/sveltekit-tweet/dist/components/Tweet.svelte';
    //import  fetchTweetAst  from 'static-tweets';
    

	export let data;
</script>

{#if data.tweet}
	<Tweet tweet={data.tweet} />
{:else if data.error}
	<p>{data.error}</p>
{/if}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
