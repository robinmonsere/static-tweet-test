export interface ITweetEditControl {
    edit_tweet_ids: string[];
    editable_until_msecs: string;
    is_edit_eligible: boolean;
    edits_remaining: string;
}
export type TIndices = [number, number];
export interface IHashtagEntity {
    indices: TIndices;
    text: string;
}
export interface IUserMentionEntity {
    id_str: string;
    indices: TIndices;
    name: string;
    screen_name: string;
}
export interface IMediaEntity {
    display_url: string;
    expanded_url: string;
    indices: TIndices;
    url: string;
}
export interface IUrlEntity {
    display_url: string;
    expanded_url: string;
    indices: TIndices;
    url: string;
}
export interface ISymbolEntity {
    indices: TIndices;
    text: string;
}
export interface ITweetEntities {
    hashtags: IHashtagEntity[];
    urls: IUrlEntity[];
    user_mentions: IUserMentionEntity[];
    symbols: ISymbolEntity[];
    media?: IMediaEntity[];
}
export type TRGB = {
    red: number;
    green: number;
    blue: number;
};
export type TRect = {
    x: number;
    y: number;
    w: number;
    h: number;
};
export type TSize = {
    h: number;
    w: number;
    resize: string;
};
export interface IVideoInfo {
    aspect_ratio: [number, number];
    variants: {
        bitrate?: number;
        content_type: 'video/mp4' | 'application/x-mpegURL';
        url: string;
    }[];
}
interface IMediaBase {
    display_url: string;
    expanded_url: string;
    ext_media_availability: {
        status: string;
    };
    ext_media_color: {
        palette: {
            percentage: number;
            rgb: TRGB;
        }[];
    };
    indices: TIndices;
    media_url_https: string;
    original_info: {
        height: number;
        width: number;
        focus_rects: TRect[];
    };
    sizes: {
        large: TSize;
        medium: TSize;
        small: TSize;
        thumb: TSize;
    };
    url: string;
}
export interface IMediaPhoto extends IMediaBase {
    type: 'photo';
    ext_alt_text?: string;
}
export interface IMediaAnimatedGif extends IMediaBase {
    type: 'animated_gif';
    video_info: IVideoInfo;
}
export interface IMediaVideo extends IMediaBase {
    type: 'video';
    video_info: IVideoInfo;
}
export type IMediaDetails = IMediaPhoto | IMediaAnimatedGif | IMediaVideo;
export interface ITweetPhoto {
    backgroundColor: TRGB;
    cropCandidates: TRect[];
    expandedUrl: string;
    url: string;
    width: number;
    height: number;
}
export interface ITweetUser {
    id_str: string;
    name: string;
    profile_image_url_https: string;
    profile_image_shape: 'Circle' | 'Square';
    screen_name: string;
    verified: boolean;
    verified_type?: 'Business' | 'Government';
    is_blue_verified: boolean;
}
export interface ITweetVideo {
    aspectRatio: [number, number];
    contentType: string;
    durationMs: number;
    mediaAvailability: {
        status: string;
    };
    poster: string;
    variants: {
        type: string;
        src: string;
    }[];
    videoId: {
        type: string;
        id: string;
    };
    viewCount: number;
}
/**
 * Base tweet information shared by a tweet, a parent tweet and a quoted tweet.
 */
export interface ITweetBase {
    /**
     * Language code of the tweet. E.g "en", "es".
     */
    lang: string;
    /**
     * Creation date of the tweet in the format ISO 8601.
     */
    created_at: string;
    /**
     * Text range of the tweet text.
     */
    display_text_range: TIndices;
    /**
     * All the entities that are part of the tweet. Like hashtags, mentions, urls, etc.
     */
    entities: ITweetEntities;
    /**
     * The unique identifier of the tweet.
     */
    id_str: string;
    /**
     * The tweet text, including the raw text from the entities.
     */
    text: string;
    /**
     * Information about the user who posted the tweet.
     */
    user: ITweetUser;
    /**
     * Edit information about the tweet.
     */
    edit_control: ITweetEditControl;
    isEdited: boolean;
    isStaleEdit: boolean;
}
/**
 * A tweet as returned by the the Twitter syndication API.
 */
export interface ITweet extends ITweetBase {
    __typename: 'Tweet';
    favorite_count: number;
    mediaDetails?: IMediaDetails[];
    photos?: ITweetPhoto[];
    video?: ITweetVideo;
    conversation_count: number;
    news_action_type: 'conversation';
    quoted_tweet?: IQuotedTweet;
    in_reply_to_screen_name?: string;
    in_reply_to_status_id_str?: string;
    in_reply_to_user_id_str?: string;
    parent?: ITweetParent;
    possibly_sensitive?: boolean;
}
/**
 * The parent tweet of a tweet reply.
 */
export interface ITweetParent extends ITweetBase {
    reply_count: number;
    retweet_count: number;
    favorite_count: number;
}
/**
 * A tweet quoted by another tweet.
 */
export interface IQuotedTweet extends ITweetBase {
    reply_count: number;
    retweet_count: number;
    favorite_count: number;
    mediaDetails?: IMediaDetails[];
    self_thread: {
        id_str: string;
    };
}
export type TTweetCoreProps = {
    id: string;
    onError?(error: any): any;
};
type TextEntity = {
    indices: TIndices;
    type: 'text';
};
export type TTweetEntity = IHashtagEntity | IUserMentionEntity | IUrlEntity | IMediaEntity | ISymbolEntity;
export type TEntityWithType = TextEntity | (IHashtagEntity & {
    type: 'hashtag';
}) | (IUserMentionEntity & {
    type: 'mention';
}) | (IUrlEntity & {
    type: 'url';
}) | (IMediaEntity & {
    type: 'media';
}) | (ISymbolEntity & {
    type: 'symbol';
});
export type TEntity = {
    text: string;
} & (TextEntity | (IHashtagEntity & {
    type: 'hashtag';
    href: string;
}) | (IUserMentionEntity & {
    type: 'mention';
    href: string;
}) | (IUrlEntity & {
    type: 'url';
    href: string;
}) | (IMediaEntity & {
    type: 'media';
    href: string;
}) | (ISymbolEntity & {
    type: 'symbol';
    href: string;
}));
export type TEnrichedTweet = Omit<ITweet, 'entities' | 'quoted_tweet'> & {
    url: string;
    user: {
        url: string;
        follow_url: string;
    };
    like_url: string;
    reply_url: string;
    in_reply_to_url?: string;
    entities: TEntity[];
    quoted_tweet?: TEnrichedQuotedTweet;
};
export type TEnrichedQuotedTweet = Omit<IQuotedTweet, 'entities'> & {
    url: string;
    entities: TEntity[];
};
/**
 * Custom components that the default Twitter theme allows.
 *
 * Note: We only use these components in Server Components, because the root `Tweet`
 * component that uses them is a Server Component and you can't pass down functions to a
 * client component unless they're Server Actions.
 */
export type TwitterComponents = {
    AvatarImg?: typeof import('./components/AvatarImg.svelte').default;
    MediaImg?: typeof import('./components/MediaImg.svelte').default;
};
export {};
