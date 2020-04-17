import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Row, Col, Breadcrumb, Button } from 'antd';
import Layout from '../../components/Layout';
import { INTERIOR_DESIGN_SLUGS, INTERIOR_DESIGN_SLUG_LABEL } from '../../constants/route';
import Card from '../../components/Card';

import fetcher from '../../helpers/fetcher';

class InteriorDesignSlug extends Component {
  static getInitialProps(ctx) {
    const { slug } = ctx.query;
    const paging = {
      page: 1,
      per_page: 6,
    };
    const filters = {
      type: slug,
    };

    return Promise.all([
      fetcher.get('interior-designs/count', { data: { ...filters } }),
      fetcher.get('interior-designs', { data: { ...paging, ...filters } }),
    ]).then(([total, data]) => {
      return {
        total,
        paging,
        data,
      };
    });
  }

  state = {
    data: this.props.data || [],
    paging: this.props.paging ||  { page: 1, page_size: 6 },
    isLoading: false,
  };

  _loadData = async () => {
    const newData = await fetcher.get('interior-designs', {
      data: {
        ...this.state.paging,
        type: this.props.router.query.slug,
      }
    });

    setTimeout(() => {
      this.setState({
        data: this.state.data.concat(newData),
        isLoading: false,
      });
    }, 1000)

  }

  loadMore = async () => {
    this.setState({
      isLoading: true,
      paging: {
        ...this.state.paging,
        page: this.state.paging.page + 1,
      },
    }, () => this._loadData());
  }

  render() {
    const { slug } = this.props.router.query;
    return (
      <Fragment>
        <section>
          <Breadcrumb>
            <Breadcrumb.Item key="home">
              <Link href="/"><a>Trang chủ</a></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key="architecture">
              <Link href="/interior-design/all"><a>Kiến trúc</a></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key="slug">
              <Link href={`/interior-design/${slug}`}><a>{INTERIOR_DESIGN_SLUG_LABEL[slug]}</a></Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <main style={{ marginTop: 20 }}>
          <Row style={{ margin: '0 -10px' }}>
            {this.state.data.map(item => (
              <Col key={item.id} xl={8} lg={12} md={24} style={{ padding: '0 10px', marginBottom: 20 }}>
                <Card
                  image={item.avatar.url}
                  title={item.title}
                  linkTo={`/interior-design-detail/${item.slug}`}
                />
              </Col>
            ))}
          </Row>
        </main>
        {this.state.data.length < this.props.total &&
          <section className="center">
            <Button loading={this.state.isLoading} onClick={this.loadMore}>Xem thêm</Button>
          </section>
        }
      </Fragment>
    );
  }
}

export default withRouter(InteriorDesignSlug);
