<script>export let tweet;
</script>

<a href={tweet.in_reply_to_url} class="root" target="_blank" rel="noopener noreferrer">
	Replying to @{tweet.in_reply_to_screen_name}
</a>

<style>
	.root {
		text-decoration: none;
		color: var(--tweet-font-color-secondary);
		font-size: 0.9375rem;
		line-height: 1.25rem;
		margin-bottom: 0.25rem;
		overflow-wrap: break-word;
		white-space: pre-wrap;
	}

	.root:hover {
		text-decoration-thickness: 1px;
		text-decoration-line: underline;
	}
</style>
