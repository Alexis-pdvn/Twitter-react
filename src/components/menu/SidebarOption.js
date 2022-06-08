import React from 'react';
function SidebarOption({text,Icon}){
    return(      
                <li className="menu_link" >                   
                    <Icon />
                    <p>{text}</p>
                </li>            
    )
}

export default SidebarOption;