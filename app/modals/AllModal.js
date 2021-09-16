import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ManageInfo from './manageInfoModal';
import AddQuestionStore from './AddQuestion';
import ModifyQuestion from './modifyQuestion';
import AddMentor from './addMentor';
import AddStudent from './addStudent';

class AllModal extends Component{

    render() {
        return (
            <div>
                <AddQuestionStore />
                <ManageInfo />
                <ModifyQuestion/>
                <AddMentor/>
                <AddStudent/>
            </div>

        )

    }
}
export default AllModal;