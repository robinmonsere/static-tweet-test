<script>import TweetMediaVideo from "./TweetMediaVideo.svelte";
import MediaImg from "./MediaImg.svelte";
import { getMediaUrl } from "../utils.js";
export let tweet;
export let components;
export let quoted = false;
const getSkeletonStyle = (media, itemCount) => {
  let paddingBottom = 56.25;
  if (itemCount === 1)
    paddingBottom = 100 / media.original_info.width * media.original_info.height;
  if (itemCount === 2)
    paddingBottom = paddingBottom * 2;
  return `width: ${media.type === "photo" ? void 0 : "unset"}; padding-bottom: ${paddingBottom}%;`;
};
let length = tweet.mediaDetails?.length ?? 0;
let Img = components?.MediaImg ?? MediaImg;
const mediaDetails = tweet.mediaDetails ?? [];
</script>

<div class={['root', !quoted && 'rounded'].join(' ')}>
	<div
		class={[
			'mediaWrapper',
			length > 1 && 'grid2Columns',
			length === 3 && 'grid3',
			length > 4 && 'grid2x2'
		].join(' ')}
	>
		{#each mediaDetails as media}
			{#if media.type === 'photo'}
				<a
					href={tweet.url}
					class={['mediaContainer', 'mediaLink'].join(' ')}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="skeleton" style={getSkeletonStyle(media, length)} />
					<Img src={getMediaUrl(media, 'small')} alt={media.ext_alt_text || 'Image'} draggable />
				</a>
			{:else}
				<div class="mediaContainer">
					<div class="skeleton" style={getSkeletonStyle(media, length)} />
					<TweetMediaVideo {tweet} {media} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.root {
		margin-top: 0.75rem;
		overflow: hidden;
		position: relative;
	}
	.rounded {
		border: var(--tweet-border);
		border-radius: 12px;
	}
	.mediaWrapper {
		display: grid;
		grid-auto-rows: 1fr;
		gap: 2px;
		height: 100%;
		width: 100%;
	}
	.grid2Columns {
		grid-template-columns: repeat(2, 1fr);
	}
	.grid3 > a:first-child {
		grid-row: span 2;
	}
	.grid2x2 {
		grid-template-rows: repeat(2, 1fr);
	}
	.mediaContainer {
		position: relative;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mediaLink {
		text-decoration: none;
		outline-style: none;
	}
	.skeleton {
		padding-bottom: 56.25%;
		width: 100%;
		display: block;
	}
	.image {
		position: absolute;
		top: 0px;
		left: 0px;
		bottom: 0px;
		height: 100%;
		width: 100%;
		margin: 0;
		object-fit: cover;
		object-position: center;
	}
</style>
