import React from 'react';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>I'm making this by following gatsby tutorial.</p>
      <StaticImage alt="Toronto night" src="../images/TorontoNight.jpg" />
    </Layout>
  )
}

export default IndexPage;
