import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout';
import fetcher from '../helpers/fetcher'

require('dotenv').config();

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
    const response = await fetcher.get('company-infos');
    return { ...appProps, companyInfo: response[0] };
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