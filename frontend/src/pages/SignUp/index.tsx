import { Helmet, HelmetProvider } from "react-helmet-async";
import ngcashLogo from "../../assets/NgCash.png";
import { Form } from "../../components/Form";
import { Container } from "./style";
import React from "react";

const SignUp = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Sign Up | NG.CASH" />
      </HelmetProvider>
      <Container>
        <div>
          <img src={ngcashLogo} alt="logo ng.cash" />
        </div>

        <div>
          <Form
            apiProp="users"
            historyProp="session"
            titleProp="Open your account"
            textProp="Already have an account? "
            linkProp="signin"
            textLinkProp="go to login"
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

export { SignUp };
