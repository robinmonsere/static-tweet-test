<script>import TweetLink from "./TweetLink.svelte";
export let tweet;
</script>

<p class="root">
	{#each tweet.entities as item, i}
		{#if item.type === 'hashtag' || item.type === 'mention' || item.type === 'url' || item.type === 'symbol'}
			<TweetLink href={item.href}>{item.text}</TweetLink>
		{:else if item.type !== 'media'}
			<span>{@html item.text}</span>
		{/if}
	{/each}
</p>

<style>
	.root {
		font-size: var(--tweet-body-font-size);
		font-weight: var(--tweet-body-font-weight);
		line-height: var(--tweet-body-line-height);
		margin: var(--tweet-body-margin);
		overflow-wrap: break-word;
		white-space: pre-wrap;
	}
</style>
