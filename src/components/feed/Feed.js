import React from 'react'
import "./Feed.css"
import MessageSender from './messagesender/MessageSender'
import Post from './post/Post'
import StoryReel from './storyreel/StoryReel'

const Feed = () => {
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />
            <Post
                profilePic="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/28764215_2319853541575254_6278675714925395968_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=yzc06yJw-noAX-eDbnB&ccb=7-4&oh=9ecdc931f5c7b227a1e12260d3ef03db&oe=608AF03D&_nc_sid=7bff83"
                message="Wow It's works!"
                timestamp="This is the timestamp"
                username="Nikodem Waleszczyk"
                image="https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg"
            />
            <Post
                profilePic="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_960_720.jpg"
            />
            <Post
                profilePic="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
            />



        </div>
    )
}

export default Feed;
