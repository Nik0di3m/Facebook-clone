import React from 'react'
import Story from './story/Story'
import "./StoryReel.css"
const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image="https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_960_720.jpg"
                profileSrc="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/28764215_2319853541575254_6278675714925395968_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=yzc06yJw-noAX-eDbnB&ccb=7-4&oh=9ecdc931f5c7b227a1e12260d3ef03db&oe=608AF03D&_nc_sid=7bff83"
                title="Nikodem Waleszczyk"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2015/05/03/14/40/woman-751236_960_720.jpg"
                profileSrc="https://cdn.pixabay.com/photo/2017/05/11/08/48/model-2303361_960_720.jpg"
                title="Klaudia Sulim"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2021/02/13/11/05/toast-6011147_960_720.jpg"
                profileSrc="https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_960_720.jpg"
                title="Monika Skowyrska"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2021/03/18/03/09/dragonfly-6103781_960_720.jpg"
                profileSrc="https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg"
                title="Wiktoria Bielik"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_960_720.jpg"
                profileSrc="https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435_960_720.jpg"
                title="Nikola Tarczyńska"
            />
        </div>
    )
}

export default StoryReel;
