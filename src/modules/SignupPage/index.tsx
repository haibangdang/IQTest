import { Button, Form, Input, Select, DatePicker } from 'antd';
import React from 'react';
import type { DatePickerProps } from 'antd';
// styled-components
import { SignupPageWrapper, SignupForm, Login } from './SignupPage.styled';
// Components
// import CustomButton from 'src/Components/Shared/CustomButton';
// others
import { requestSignup } from '@/store/reducers/signup/signup.slice';
import { useAppDispatch } from '@/store/hook';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const dateFormat = 'YYYY/MM/DD';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    dispatch(
      requestSignup({
        jsonData: {
          dob: '2019-05-29T03:42:00.817Z',
          email: 'taikool2121996@gmail.com',
          gender: 'female',
          name: 'aaaa',
          password: 'đââsdsa',
          repassword: 'đââsdsa',
        },
      }),
    );
  };

  return (
    <SignupPageWrapper className="d-flex flex-column align-items-center mt-5">
      <SignupForm>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

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
            name="gender"
            label="Gender"
            rules={[{ required: true, message: 'Please select gender!' }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item name="dob" label="Enter your DOB">
            <DatePicker onChange={onChange} format={dateFormat} />
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

          <Form.Item
            name="re-password"
            label="Re-Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The new password that you entered do not match!',
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Get Stared
            </Button>
          </Form.Item>
        </Form>
      </SignupForm>

      <Login>
        <p>Already have an account ? Login</p>
      </Login>
    </SignupPageWrapper>
  );
};

export default SignupPage;
