import React from 'react';
import { Button } from 'semantic-ui-react';
import Layout from '../components/Layout'
 
 
 
const MyApp = () => {
   return(
   <Layout>   
   <div>   
     <h1>Hello Next.js</h1>
     <Button floated="right" content='My Button' icon='add circle' primary />
   </div>
   </Layout>
   )
}
 
export default MyApp;
