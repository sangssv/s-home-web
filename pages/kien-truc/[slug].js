import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import dateFormat from 'dateformat';
import { Row, Col, Button, Breadcrumb } from 'antd';
import SEOMeta from '../../components/SEOMeta';
import AdviseButton from '../../components/AdviseButton';
import { ROUTE } from '../../constants/route';
import fetcher from '../../helpers/fetcher';

class ArchitectureSlug extends Component {
  static getInitialProps(ctx) {
    const { slug } = ctx.query;

    return fetcher.get(`architectures/${slug}`)
      .then(response => {
        return { data: response };
      });
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <SEOMeta
          title={data.title}
          description="Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự."
          url={`kien-truc/${data.slug}`}
          imageUrl={data.avatar.url}
        />
        <div className="architecture-detail-page">
          <section>
            <Breadcrumb>
              <Breadcrumb.Item key="home">
                <Link href="/">Trang chủ</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item key="architecture">
                <Link href={ROUTE.ARCHITECTURE}>Kiến trúc</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </section>
          <main className="container architecture-detail-page__content">
            <h1 className="article-title">{data.title}</h1>
            <ul className="date-post">
              <li>{dateFormat(new Date(data.updated_at), 'dd/mm/yyyy')}</li>
              <li>Lượt xem: {data.count}</li>
              <li>Admin</li>
            </ul>
            <ReactMarkdown className="article-content" source={data.content} />
          </main>
          {data.video_url ? (
            <section className="video">
              <iframe src={data.video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
          ) : null}
          <section className="commitment">
            <h5 className="title">Chúng tôi cam kết</h5>
            <ol>
              <li>Sản phẩm thi công đúng 100% so với bản vẽ thiết kế.</li>
              <li>Sử dụng nguyên liệu đạt chứng chỉ chất lượng quốc tế, đảm bảo sức khỏe cho gia đình bạn.</li>
              <li>Bảo hành tất cả các sản phẩm 2 năm, bảo hành chất lượng gỗ trọn vòng đời sử dụng.</li>
              <li>Cam kết mức giá tốt nhất với nhiều ưu đãi bất ngờ trong năm 2020.</li>
            </ol>
            <AdviseButton />
          </section>
        </div>
      </>
    );
  }
}

export default withRouter(ArchitectureSlug);