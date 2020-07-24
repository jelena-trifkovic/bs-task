import React from 'react';
import { Tabs } from 'antd';
import Board from './Board';

const { TabPane } = Tabs;

const callback = (key) => {
  console.log(key);
}

const GameScreen = (props) => {

  return (
    <Tabs defaultActiveKey="1" onChange={callback} centered>
      <TabPane tab="Tic Tac Toe Game" key="1">
        <Board />
      </TabPane>
    </Tabs>
  );
}

export default GameScreen;