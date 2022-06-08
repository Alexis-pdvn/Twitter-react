import React from 'react';
function SidebarOption({text,Icon}){
    return(      
                <li className="menu_link" >                   
                    <Icon />
                    <h3>{text}</h3>
                </li>            
    )
}

export default SidebarOption;