import React, { Component } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { Option } from 'antd/lib/mentions';

@inject('ModalsStore','UserStore')
@observer
class ManageInfo extends Component {

    constructor(props) {
        super(props);
    }


    onCancel = () => {
        const { ModalsStore } = this.props;
        ModalsStore.close('modifyUser');
    }

    onOk = (Item) => {
        const {modifyUser} = this.props.ModalsStore.modals;
        const {UserStore} =this.props;
        Item.id=modifyUser.info.id;
        UserStore.updateUser(Item);
        const {reload} =this.props;
        reload();
    }
    render() {
        const { modals } = this.props.ModalsStore;
        const { modifyUser } = modals;
        const { mentorList} = this.props.UserStore;

        const optionList = []
        mentorList.forEach(item => {
            optionList.push(
                <Option key={item.id} value={item.id}>
                    {item.name}
                </Option>
            )
        });
        return (
            <Modal
                title='信息修改'
                visible={modifyUser.open}
                onCancel={this.onCancel}
                onOk={this.onOk}
                footer={null}

            >
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    labelAlign="left"
                    name='Info'
                    onFinish={this.onOk}
                    initialValues={modifyUser.info}
                >
                    <Form.Item
                        label='用户名'
                        name='username'
                    >
                        <Input disabled={true} />
                    </Form.Item>
                    <Form.Item
                        label='姓名'
                        name='name'
                    >
                        <Input disabled={true} />
                    </Form.Item>
                    <Form.Item
                        label='mentor'
                        name='mid_id'
                    >
                        <Select >
                            {optionList}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label='密码'
                        name='password'
                        required={[
                            {
                                required:true,
                                message:'请输入密码'
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        确认修改
                    </Button>
                </Form>
            </Modal>
        )
    }
}
export default ManageInfo;