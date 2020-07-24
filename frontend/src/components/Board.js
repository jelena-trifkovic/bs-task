import React from 'react';
import Square from './Square';
import { Row, Col } from 'antd';

const Board = (props) => {
  const squares = ['O', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X'];

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  return (
    <>
      <Row gutter={[8, 8]} justify="center">
        <Col className="gutter-row" span={6}>
          {renderSquare(0)}
        </Col>
        <Col className="gutter-row" span={6}>
          {renderSquare(1)}
        </Col>
        <Col className="gutter-row" span={6}>
          {renderSquare(2)}
        </Col>
      </Row>
      <Row gutter={[8, 8]} justify="center">
        <Col className="gutter-row" span={6}>
          {renderSquare(3)}
        </Col>
        <Col className="gutter-row" span={6}>
          {renderSquare(4)}
        </Col>
        <Col className="gutter-row" span={6}>
          {renderSquare(5)}
        </Col>
      </Row>
      <Row gutter={[8, 8]} justify="center">
        <Col className="gutter-row" span={6}>
          {renderSquare(6)}
        </Col>
        <Col className="gutter-row" span={6}>
          {renderSquare(7)}
        </Col>
        <Col className="gutter-row" span={6}>
          {renderSquare(8)}
        </Col>
      </Row>
    </>
  );
}

export default Board;