import React, { useState, useContext } from "react";
import {
  Container,
  Content,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  ButtonToolbar,
  Button,
} from "rsuite";
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../Context/GlobalState';

// import { baseUrl } from '../utils'

const Login = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { signin } = useContext(GlobalContext);

  const onSubmit = async () => {
    signin(email, password)
  }

  return (
    <div>
        <Container>
          <Content className="Login">
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Member Login</h3>} style={{ marginLeft: -100}}>
                  <Form fluid>
                    <FormGroup>
                      <ControlLabel>Email</ControlLabel>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary" onClick={() => {onSubmit(); setTimeout(() => history.push('/'), 4000)} }>
                          Sign in
                        </Button>
                        <Button appearance="link">Forgot password?</Button>
                      </ButtonToolbar>
                    </FormGroup>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
    </div>
  );
};

export default Login;