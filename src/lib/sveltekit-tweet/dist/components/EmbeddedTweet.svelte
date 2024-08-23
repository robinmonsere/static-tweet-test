<script>import { enrichTweet } from "../utils.js";
import TweetContainer from "./TweetContainer.svelte";
import TweetHeader from "./TweetHeader.svelte";
import TweetInReplyTo from "./TweetInReply.svelte";
import TweetBody from "./TweetBody.svelte";
import TweetMedia from "./TweetMedia.svelte";
import TweetInfo from "./TweetInfo.svelte";
import TweetActions from "./TweetActions.svelte";
import TweetReplies from "./TweetReplies.svelte";
export let tweet;
export let components = {};
console.info(`using tweet ${JSON.stringify(tweet)}`);
let enrichedTweet;
try {
  enrichedTweet = enrichTweet(tweet);
} catch (e) {
  console.log(e);
}
</script>

{#if enrichedTweet}
	<TweetContainer>
		<TweetHeader tweet={enrichedTweet} {components} />
		{#if enrichedTweet.in_reply_to_status_id_str}
			<TweetInReplyTo tweet={enrichedTweet} />
		{/if}
		<TweetBody tweet={enrichedTweet} />
		{#if enrichedTweet.mediaDetails?.length}
			<TweetMedia tweet={enrichedTweet} {components} />
		{/if}
		<!-- {#if enrichedTweet.quoted_tweet}
      <QuotedTweet {enrichedTweet.quoted_tweet} />
    {/if} -->
		<TweetInfo tweet={enrichedTweet} />
		<TweetActions tweet={enrichedTweet} />
		<TweetReplies tweet={enrichedTweet} />
	</TweetContainer>
{/if}
