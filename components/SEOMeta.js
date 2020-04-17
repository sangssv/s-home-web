import React from 'react'
import Head from 'next/head'

const SEOMeta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta name="og:description" property="og:description" content={props.description} />
    <meta property="og:site_name" content="Proper Noun" />
    <meta property="og:url" content={`${props.canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="@propernounco" />
    <meta name="twitter:creator" content="@propernounco" />
    <link rel="icon" type="image/png" href="/public/favicon.ico" />
    <link rel="apple-touch-icon" href="/public/favicon.ico" />
  </Head>
);

SEOMeta.defaultProps = {
  title: 'S.Home Interior',
  description: 'Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự.',
  canonical: '',
};

export default SEOMeta