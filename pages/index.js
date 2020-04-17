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

export default Index;
