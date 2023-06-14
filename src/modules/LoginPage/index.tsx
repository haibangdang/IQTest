// libs
import { useEffect, type FC } from 'react';
import Image from 'next/image';
import { Button, Checkbox, Form, Input } from 'antd';
// styled-components
import {
  LoginPageWrapper,
  LeftSection,
  RightSection,
} from './LoginPage.styled';
// others
import { bg } from '../../../public/assets';
import { requestLogin } from '@/store/reducers/login/login.slice';
import { useAppDispatch } from '@/store/hook';

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('loginData')) {
      // const data = JSON.parse(localStorage.data);
      // fill out the form
      console.log(localStorage.data);
    }
  }, []);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    dispatch(
      requestLogin({
        jsonData: values,
      }),
    );
    localStorage.setItem(
      'loginData',
      JSON.stringify({
        // Form data
        email: values.email,
        password: values.password,
      }),
    );
    console.log(localStorage.getItem('loginData'));
  };
  return (
    <LoginPageWrapper>
      <div className="row mx-0">
        <LeftSection className="col-6">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                // onClick={handleSubmit}
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </LeftSection>

        <RightSection className="col-6 mb-5">
          <Image src={bg} alt="me" priority />
        </RightSection>
      </div>
    </LoginPageWrapper>
  );
};

export default LoginPage;
