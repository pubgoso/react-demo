import React, { Component } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { Option } from 'antd/lib/mentions';
import styles from './index.css';

@inject('ModalsStore','UserStore')
@observer
class ModifyQuestion extends Component {

    constructor(props) {
        super(props);
    }


    onCancel = () => {
        const { ModalsStore } = this.props;
        ModalsStore.close('modifyQuestion');
    }

    onOk = (Item) => {
        //todo  带上问题id 
        const { userInfo } = this.props.UserStore;
        const { modals } = this.props.ModalsStore;
        const { info } = modals.modifyQuestion;
        Item.qid = info.id;
        Item.uid = userInfo.id;
        this.props.UserStore.updateQuestion(Item);
    }
    render() {
        const { modals } = this.props.ModalsStore;
        const { info } = modals.modifyQuestion;

        const value = info.status;
        return (
            <Modal
                title='回答问题'
                visible={modals.modifyQuestion.open}
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
                    initialValues={info}
                >
                    <Form.Item
                        label='问题链接'
                        name='link'
                    >
                        <span>
                            <a href={info.link} target='_blank'>{info.link}</a>
                        </span>
                    </Form.Item>
                    <Form.Item
                        label='积分'
                        name='score'
                    >
                        <span>
                            {info.score}
                        </span>
                    </Form.Item>
                    <Form.Item
                        label='回答链接'
                        name='Alink'
                        rules={
                            [{ required: true, message: '请输入回答链接' }]
                        }
                    >
                        {/* todo */}
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='当前状态'
                        name='status'
                    >
                        <span>
                            {
                                value === 10 ? '待回答' : (
                                    value === 20 ? '待审核' : (
                                        value === 30 ? '打回' : (
                                            value === 40 ? '通过' : '其他'
                                        )
                                    )
                                )}

                        </span>
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className='submit'
                    >
                        确认回答
                    </Button>
                </Form>
            </Modal>
        )
    }
}
export default ModifyQuestion;