// src/SignupForm.js
import {useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import axios from 'axios';

const SignupForm = () => {
    const [loading, setLoading] = useState(false);

    // 회원가입 폼 제출 핸들러
    const onFinish = async (values) => {
        setLoading(true);
        try {
            // Axios를 사용하여 서버에 데이터 전송
            const response = await axios.post('http://localhost:8080/users', values);
            message.success('회원가입이 완료되었습니다!');
            console.log('Response:', response.data);
        } catch (error) {
            message.error('회원가입에 실패했습니다. 다시 시도해주세요.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form
            name="signup"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="name"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="age"
                name="age"
                rules={[
                    {required: true, message: 'Please input your email!'},
                ]}
            >
                <Input/>
            </Form.Item>

            {/*<Form.Item*/}
            {/*    label="Password"*/}
            {/*    name="password"*/}
            {/*    rules={[{ required: true, message: 'Please input your password!' }]}*/}
            {/*>*/}
            {/*    <Input.Password />*/}
            {/*</Form.Item>*/}

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignupForm;
