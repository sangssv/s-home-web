import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Form, Input, Button, Modal } from 'antd';
import { FormInstance } from 'antd/lib/form';
import fetcher from '../helpers/fetcher';

class ContactForm extends React.Component {
  formRef = React.createRef();

  onFinish = async (formData) => {
    fetcher.post('advice', { data: formData })
      .then(() => {
        this.formRef.current.resetFields();
        this.openModalSuccess();
      });
  };

  openModalSuccess = () => {
    const modal = Modal.success({
      content: (
        <div>
          <p style={{
            fontSize: 20,
          }}>Yêu cầu của bạn đã được gửi đi.</p>
          <p>- Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
          <p>- Cảm ơn bạn đã tin tưởng và đồng hành cũng S-Home!</p>
        </div>
      )
    });

    setTimeout(() => {
      modal.destroy();
    }, 5000);
  }

  render() {
    return (
      <Form
        ref={this.formRef}
        name="advise"
        onFinish={this.onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Vui lòng để lại họ & tên của bạn!' }]}
        >
          <Input
            type="text"
            placeholder="Họ và tên"
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Vui lòng để lại số điện thoại của bạn!' }]}
            style={{ display: 'inline-block', width: '50%', paddingRight: '10px' }}
          >
            <Input
              type="phone"
              placeholder="Số điện thoại"
            />
          </Form.Item>
          <Form.Item
            name="email"
            style={{ display: 'inline-block', width: '50%', paddingLeft: '10px ' }}
          >
            <Input
              type="email"
              placeholder="Email"
            />
          </Form.Item>
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="project"
            style={{ display: 'inline-block', width: '75%', paddingRight: '10px' }}
          >
            <Input
              placeholder="Tên dự án"
            />
          </Form.Item>
          <Form.Item
            name="area"
            style={{ display: 'inline-block', width: '25%', paddingLeft: '10px ' }}
          >
            <Input
              placeholder="Diện tích (m2)"
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="description"
        >
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
    );
  }
};

export default ContactForm;