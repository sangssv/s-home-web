import React from 'react';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import SEOMeta from '../components/SEOMeta';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Contact from '../components/Contact';

const Index = (props) => {
  return (
    <div>
      <SEOMeta
        title="Trang chủ"
        description="Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự."
        url="http://shomeinterior.com/"
      />
      <Slider {...props} />
      <Contact {...props} />
    </div>
  );
};

export default Index;
