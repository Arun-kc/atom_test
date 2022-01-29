import React from 'react'
import Header from './Header'
import Search from './Search';
import Tweet from './Tweet';
import { getTweets } from '../libs/twitter';

function Page({selectedLink}) {
    //console.log(selectedLink);
    // const tweet = await getTweets(['1414491290486534147']);
    console.log('hiiiii');
    var tweet = getTweets('1414491290486534147');
    console.log(tweet);
    // const tweet = async () =>{
    //     getTweets('1414491290486534147');
    // }
    //console.log(tweet.id);
    
    return (
        <div className="bg-gray-50 min-h-screen flex justify-center px-10">
        <div className="absolute w-full max-w-lg">
            <div className="absolute top-12 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-12 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-48 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="m-8 opacity-1 relative space-y-4 -bottom-28">
                <div className="p-5 bg-gray-700 rounded-lg flex items-center justify-between space-x-8">
                    <div className="flex-1">
                    <p className="text-center font-mono text-sm text-pink-300">Create and share beautiful images of your tweets!!✨</p>
                    </div>
                </div>
            </div>
            {/* <Tweet key={tweet} /> */}
        </div>
        </div>
    )
}

export default Page