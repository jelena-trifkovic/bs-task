import React from 'react';
import Board from './Board';
import { Row, Col } from 'antd';

const BoardsList = (props) => {

  return (
    <>
        <Row gutter={[8, 8]} justify="center">
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
        </Row>
        <Row gutter={[8, 8]} justify="center">
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
        </Row>
        <Row gutter={[8, 8]} justify="center">
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <Board />
          </Col>
        </Row>
      </>
  );
}

export default BoardsList;