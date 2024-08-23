<script>import EmbeddedTweet from "./EmbeddedTweet.svelte";
export let components = {};
export let tweet;
</script>

<EmbeddedTweet {tweet} {components} />
