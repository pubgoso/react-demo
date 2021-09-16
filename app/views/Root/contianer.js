import React, { Component } from 'react';
import Tabpane from '../../component/TabPane';
import { Tabs } from 'antd';
import styles from '../../styles/index.css';
import RankList from '../../component/rank';
import UserList from '../../component/user_list';
import AllModal from '../../modals/AllModal';
import { observer } from 'mobx-react';
import QuestionList from '../../component/questionList';
import AuditLog from '../../component/auditLog';
import MentorList from '../../component/mentorList';

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

                        <TabPane tab='MentorList' key="2">
                            <MentorList/>
                        </TabPane>
                        
                        <TabPane tab='UserList' key="3">
                            <UserList/>
                        </TabPane>



                        <TabPane tab='QuestionList' key="4">
                            <QuestionList/>
                        </TabPane>

                        <TabPane tab='AuditLog' key="5">
                            <AuditLog/>
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