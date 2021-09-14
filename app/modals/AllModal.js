import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ManageInfo from './manageInfoModal';
import AddQuestionStore from './AddQuestion';
import ModifyQuestion from './modifyQuestion';

class AllModal extends Component{

    render() {
        return (
            <div>
                <AddQuestionStore />
                <ManageInfo />
                <ModifyQuestion/>
            </div>

        )

    }
}
export default AllModal;