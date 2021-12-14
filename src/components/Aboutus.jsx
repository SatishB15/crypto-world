import React from 'react';
import { Card, Col, Row, Space, Typography } from 'antd';

const { Title } = Typography;

const { Meta } = Card;

const Aboutus = () => (
  <>
    <Row>
      <Space align="baseline" size={300}>
        <Col>
          <Card
            hoverable
            style={{ width: 350, height: 538 }}
            cover={<img alt="profile_image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta style={{ color: 'blue' }} description="Msc Computer Science" />
            <Title level={1}>Satish Birhade</Title>
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 350, height: 538 }}
            cover={<img alt="profile_image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta description="Msc Computer Science" />
            <Title level={1}>Jitendra Jadhav</Title>
          </Card>
        </Col>
      </Space>
    </Row>
  </>
  );

export default Aboutus;
