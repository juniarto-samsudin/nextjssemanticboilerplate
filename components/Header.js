import React from "react";
import { Header, Icon } from "semantic-ui-react";

const PageHeader = () =>{
    return(
        <Header as='h2' style={{ marginTop: "30px" }}>
            <Icon name='microchip' />
            <Header.Content>Gpu4All.net</Header.Content>
            <Header.Subheader>Low Cost and Affordable Gpu Sharing Network</Header.Subheader>
        </Header>
    );
};

export default PageHeader;