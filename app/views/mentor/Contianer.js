import React, { Component } from 'react';
import Tabpane from '../../component/TabPane';
import { Tabs } from 'antd';
import styles from '../../styles/index.css';
import RankList from '../../component/rank';
import UserList from '../../component/user_list';
import AllModal from '../../modals/AllModal';
import { observer } from 'mobx-react';
import TaskList from './TaskList';

@observer
class Contianer extends Component {

    render() {
        const { TabPane } = Tabs;
        return (
            <div>
                <div className='left'>
                    <RankList />

                </div>
                <div className='w'>
                    <Tabs>
                        <TabPane tab='TaskList' key="2">
                            <TaskList />
                        </TabPane>
                    </Tabs>
                </div>
                <AllModal />
            </div>
        )
    }
}

export default Contianer;