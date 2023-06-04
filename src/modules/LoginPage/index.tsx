// libs
import type { FC } from 'react';
import Image from 'next/image';
import { Button, InputGroup, Form } from 'react-bootstrap';

// styled-components
import {
  LoginPageWrapper,
  LeftSection,
  RightSection,
} from './LoginPage.styled';
// others
import { bg } from '../../../public/assets';

const LoginPage: FC = () => {
  return (
    <LoginPageWrapper>
      <div className="row mx-0">
        <LeftSection className="col-6 mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px' }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <div className="text-center pt-1 mb-5 pb-1">
              <Button className="mb-4 w-100 gradient-custom-2">Sign in</Button>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Button className="mx-2" color="danger">
                Danger
              </Button>
            </div>
          </div>
        </LeftSection>

        <RightSection className="col-6 mb-5">
          <Image src={bg} alt="me" priority />
        </RightSection>
      </div>
    </LoginPageWrapper>
  );
};

export default LoginPage;
