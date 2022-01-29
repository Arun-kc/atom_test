//require('dotenv').config();
// const webpack = require('webpack')
import axios from 'axios'

export const getTweets = async (id) => {
    // if (ids.length === 0) {
    //   return [];
    // }
    console.log('hi');

    const headers = {
        'Authorization': `Bearer ${process.env.TWITTER_API_KEY}`
    }
  
    const queryParams = new URLSearchParams({
      ids: id,
      expansions:
        'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
      'tweet.fields':
        'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
      'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
      'media.fields':
        'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics'
    });

    //const queryParams = `ids=${id}&tweet.fields=attachments,author_id,created_at,public_metrics,source&expansions=attachments.media_keys`;
    console.log(queryParams);
    //https://api.twitter.com/2/tweets?ids=1260294888811347969&tweet.fields=attachments,author_id,created_at,public_metrics,source&expansions=attachments.media_keys
  
    // const response = await fetch(
    //   `https://api.twitter.com/2/tweets?${queryParams}`,
    //   {
    //     method : "GET",
    //     headers: {
    //       Authorization: `Bearer ${process.env.TWITTER_API_KEY}`
    //     }
    //   }
    // );
    // console.log(response.data);

    try {
		const response = await axios.get(`https://api.twitter.com/2/tweets?${queryParams}`, {headers})
        console.log(response.data);
        const tweets = await response.data;
        console.log(tweets);
    
        const getAuthorInfo = (author_id) => {
        return tweets.includes.users.find((user) => user.id === author_id);
        };
    
        const getReferencedTweets = (mainTweet) => {
        return (
            mainTweet?.referenced_tweets?.map((referencedTweet) => {
            const fullReferencedTweet = tweets.includes.tweets.find(
                (tweet) => tweet.id === referencedTweet.id
            );
    
            return {
                type: referencedTweet.type,
                author: getAuthorInfo(fullReferencedTweet.author_id),
                ...fullReferencedTweet
            };
            }) || []
        );
        };
    
        return tweets.data.reduce((allTweets, tweet) => {
        const tweetWithAuthor = {
            ...tweet,
            media:
            tweet?.attachments?.media_keys.map((key) =>
                tweets.includes.media.find((media) => media.media_key === key)
            ) || [],
            referenced_tweets: getReferencedTweets(tweet),
            author: getAuthorInfo(tweet.author_id)
        };
    
        return [tweetWithAuthor, ...allTweets];
        }, []);
	}

	catch(e) {
		console.log('Something went wrong, please try again', e);
	}
  
    // const tweets = await response.data.json();
    // console.log(tweets);
  
    // const getAuthorInfo = (author_id) => {
    //   return tweets.includes.users.find((user) => user.id === author_id);
    // };
  
    // const getReferencedTweets = (mainTweet) => {
    //   return (
    //     mainTweet?.referenced_tweets?.map((referencedTweet) => {
    //       const fullReferencedTweet = tweets.includes.tweets.find(
    //         (tweet) => tweet.id === referencedTweet.id
    //       );
  
    //       return {
    //         type: referencedTweet.type,
    //         author: getAuthorInfo(fullReferencedTweet.author_id),
    //         ...fullReferencedTweet
    //       };
    //     }) || []
    //   );
    // };
  
    // return tweets.data.reduce((allTweets, tweet) => {
    //   const tweetWithAuthor = {
    //     ...tweet,
    //     media:
    //       tweet?.attachments?.media_keys.map((key) =>
    //         tweets.includes.media.find((media) => media.media_key === key)
    //       ) || [],
    //     referenced_tweets: getReferencedTweets(tweet),
    //     author: getAuthorInfo(tweet.author_id)
    //   };
  
    //   return [tweetWithAuthor, ...allTweets];
    // }, []);
  };