import React, { Component } from 'react';
import Tabpane from '../../component/TabPane';
import { Tabs } from 'antd';
import styles from '../../styles/index.css';
import RankList from '../../component/rank';
import UserList from '../../component/user_list';
import AllModal from '../../modals/AllModal';
import { observer } from 'mobx-react';
import TaskList from './TaskList';
import Submissions from './submission';

@observer
class Contianer extends Component {

    render() {
        const { TabPane } = Tabs;
        return (
            <div>
                <Tabpane />
                <div className='w'>

                    <Tabs>
                        <TabPane tab='RankList' key="1">
                            <RankList/>
                            
                        </TabPane>

                        <TabPane tab='TaskList' key="2">
                            <TaskList/>
                        </TabPane>
                        <TabPane tab='Submission' key="3">
                            <Submissions/>
                        </TabPane>
                    </Tabs>
                    <div>

                    </div>
                </div>
                <AllModal/>
            </div>
        )
    }
}

export default Contianer;