import React from 'react';
import { Form, Input, Button } from 'antd';

const Contactus = () => (
  <>
    <Form name="nest-messages">
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'Message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </>
  );

export default Contactus;
