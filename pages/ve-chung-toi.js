import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import SEOMeta from '../components/SEOMeta';
import fetcher from '../helpers/fetcher';

class AboutUs extends Component {
  render() {
    return (
      <>
        <SEOMeta
          title="Về chúng tôi"
          description="Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự."
          url="http://shomeinterior.com/ve-chung-toi"
        />
        <div className="about_us_page">
          <ReactMarkdown source={this.props.data.content} />
        </div>
      </>
    );
  }
}

AboutUs.getInitialProps = () => {
  return fetcher.get('about-us')
    .then(response => {
      console.log('response', response)
      return { data: response[0] };
    });
}

export default AboutUs;