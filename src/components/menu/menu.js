import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SidebarOption from './SidebarOption'
class Menu extends React.Component {
    render() {
        return (
            <>
                <div className="sidebar">
                    {/* Icon de Twitter */}
                    <TwitterIcon className={"icon-Twitter"} />
                    <div className="sidebar">
                        <section>
                            <ul>
                                <SidebarOption Icon={HomeRoundedIcon} text="Accueil" />
                                <SidebarOption Icon={TagRoundedIcon} text="Explorer" />
                                <SidebarOption Icon={GroupOutlinedIcon} text="Communautés" />
                                <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
                                <SidebarOption Icon={EmailOutlinedIcon} text="Messages" />
                                <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profil" />
                                <SidebarOption Icon={MoreHorizOutlinedIcon} text="Plus" />
                            </ul>
                        </section>

                    </div>
                </div>
            </>
        );
    }

}

export default Menu;
