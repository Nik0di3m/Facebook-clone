import React, { useEffect, useState } from 'react'
import "./Feed.css"
import MessageSender from './messagesender/MessageSender'
import Post from './post/Post'
import StoryReel from './storyreel/StoryReel'
import db from "../../firebase"


const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />
            {posts.map((posts) => (
                <Post
                    key={posts.data.id}
                    profilePic={posts.data.profilePic}
                    message={posts.data.message}
                    timestamp={posts.data.timestamp}
                    username={posts.data.username}
                    image={posts.data.image}
                />
            ))}



        </div>
    )
}

export default Feed;
