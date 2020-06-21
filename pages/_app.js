import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout';
import fetcher from '../helpers/fetcher'

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

NProgress.configure({
  minimum: 0.1,
  showSpinner: false,
});

Router.events.on('routeChangeStart', url => {
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  static getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const companyInfos = await fetcher.get('company-infos');
    const popups = await fetcher.get('popups');
    const sliders = await fetcher.get('sliders');
    return {
      ...appProps,
      companyInfo: companyInfos[0],
      popup: popups[0],
      sliders: sliders,
    };
  }

  render() {
    const { Component, pageProps, err, ...otherProps } = this.props;
    return (
      <Layout
        {...otherProps}
      >
        <Component {...pageProps} />
      </Layout>
    )
  }
}