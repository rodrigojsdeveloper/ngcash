import { Helmet, HelmetProvider } from "react-helmet-async";
import ngcashLogo from "../../assets/NgCash.png";
import { Container } from "../SignUp/style";
import { Form } from "../../components/Form";
import React from "react";

const SignIn = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Sign In | NG.CASH" />
      </HelmetProvider>
      <Container>
        <div className="divBlack">
          <img src={ngcashLogo} alt="logo ng.cash" />
        </div>

        <div className="divWhite">
          <Form
            apiProp="signin"
            historyProp="dashboard"
            titleProp="Log in"
            textProp="Don't have an account yet? "
            linkProp=""
            textLinkProp="go to register"
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

export { SignIn };
