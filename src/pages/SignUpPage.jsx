import {Button, Form, Input, InputNumber, Row} from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const SignUpPage = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log(values);
        const result = await axios.post("http://localhost:8080/user/signup", values);
        if (result) {
            console.log(result);
            navigate("/");
        }
        console.log('Success:', values);
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <>
            <div style={{top: 0, position: 'fixed', left: 0, alignItems: 'center', margin: 0}}>
                <h1>
                    Make your portfolio
                </h1>
            </div>
            <Row>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 1600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="아이디"
                        name="id"


                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="패스워드"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        label="이름"
                        name="name"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="이메일"
                        name="email"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="휴대전화"
                        name="phoneNumber"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="나이"
                        name="age"
                    >
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >

                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            회원가입
                        </Button>
                    </Form.Item>
                </Form>
                <Button
                    style={{
                        marginLeft: 10,
                    }}
                >
                    중복확인
                </Button>
            </Row>
        </>
    )
}
export default SignUpPage;