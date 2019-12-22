import React from 'react';
import { Layout, Row, Col, Form, Icon, Input, Button } from 'antd';
const Contact = () => (
  <Layout>
    <Row justify="center" type="flex">
      <Col span="12">
        <div className="contact">
          <h2 className="main-title">Tư vấn - Báo giá</h2>
          <p>Xin điền vào bảng thông tin dưới đây nếu bạn có vấn đề liên quan đến sản phẩm hay dịch vụ của chúng tôi. Cảm ơn bạn đã chia sẻ ý kiến!</p>

          <Form>
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item style={{ display: 'inline-block', width: '50%', paddingRight: '10px' }}>
                <Input
                  type="text"
                  placeholder="Họ và tên"
                />
              </Form.Item>
              <Form.Item style={{ display: 'inline-block', width: '50%', paddingLeft: '10px ' }}>
                <Input
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Input
                type="phone"
                placeholder="Số điện thoại"
              />
            </Form.Item>
            <Form.Item>
              <Input.TextArea
                rows={5}
                placeholder="Nội dung"
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Gửi tin nhắn
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default Contact;