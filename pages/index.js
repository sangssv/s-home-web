import React from 'react';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import withLayout from '../components/Layout';
import Slider from '../components/Slider';
import Contact from '../components/Contact';

function Index({ stars }) {
  console.log('stars', stars)
  return (
    <div>
      <Head>
        <title>Nội thất GOLD</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap&subset=latin-ext,vietnamese" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Slider />
      <Contact />
    </div>
  )
};

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default withLayout(Index);
