import React from "react";
import { Menu } from "semantic-ui-react";

const MenuHeader = () =>{
	return (
		<Menu style={{ marginTop: "30px" }}>
       		<Menu.Item>Juniarto</Menu.Item>
        	<Menu.Menu position="right">
         	<Menu.Item>Inbox</Menu.Item>
         	<Menu.Item>+</Menu.Item>
       		</Menu.Menu>
     </Menu>
	
	);
};

export default MenuHeader;
