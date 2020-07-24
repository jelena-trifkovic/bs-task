import React from 'react';
import { Tabs } from 'antd';
import BoardsList from './BoardsList';

const { TabPane } = Tabs;

const callback = (key) => {
  console.log(key);
}

const BoardsScreen = (props) => {

  return (
    <Tabs defaultActiveKey="1" onChange={callback} centered>
      <TabPane tab="Tic Tac Toe Game Boards" key="1">
        <BoardsList />
      </TabPane>
    </Tabs>
  );
}

export default BoardsScreen;