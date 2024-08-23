<script>import { onMount } from "svelte";
import { format } from "date-fns";
export let tweet;
let mounted = false;
let createdAt = null;
onMount(() => {
  mounted = true;
  if (typeof window !== "undefined") {
    createdAt = new Date(tweet.created_at);
  }
});
</script>

{#if createdAt}
	<a
		class="root"
		href={tweet.url}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={format(createdAt, 'h:mm a · MMM d, y')}
	>
		<time dateTime={createdAt.toISOString()}>
			{format(createdAt, 'h:mm a · MMM d, y')}
		</time>
	</a>
{/if}
