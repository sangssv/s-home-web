import React, { Component } from 'react';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Contact from '../components/Contact';

class Index extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Contact />
      </div>
    );
  }
}

// Index.getInitialProps = async () => {
  // const res = await fetch('http://localhost:1337/company-infos');
  // const json = await res.json();
  // const companyInfo = json[0];
  // return { companyInfo };
// }

export default Index;
