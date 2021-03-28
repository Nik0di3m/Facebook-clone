import React from 'react';
import "./Sidebar.css";
import SidebarRow from './sidebar_row/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow
                src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/28764215_2319853541575254_6278675714925395968_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=yzc06yJw-noAX-eDbnB&ccb=7-4&oh=9ecdc931f5c7b227a1e12260d3ef03db&oe=608AF03D&_nc_sid=7bff83"
                title="Nikodem"
            />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow
                Icon={EmojiFlagsIcon}
                title="Pages"
            />
            <SidebarRow
                Icon={PeopleIcon}
                title="Firends"
            />
            <SidebarRow
                Icon={ChatIcon}
                title="Messenger"
            />
            <SidebarRow
                Icon={StorefrontIcon}
                title="Marketplace"
            />
            <SidebarRow
                Icon={VideoLibraryIcon}
                title="Videos"
            />
            <SidebarRow
                Icon={ExpandMoreIcon}
                title="More"
            />
        </div>
    )
}

export default Sidebar;
