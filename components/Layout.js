import React from 'react';
import { Container } from 'semantic-ui-react';
//import Head from "next/head"
import MenuHeader from "./MenuHeader";
import PageHeader from "./Header";
 
const Layout = (props) => {
 return (
   <div>
   <Container>
       <PageHeader />
       {props.children}
   </Container>
   </div>
 );
};
 
export default Layout;
