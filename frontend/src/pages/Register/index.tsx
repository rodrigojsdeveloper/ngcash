import ngcashLogo from "../../assets/NgCash.png";
import { Form } from "../../components/Form";
import { Container } from "./style";

const Register = () => {
  return (
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
  );
};

export { Register };
