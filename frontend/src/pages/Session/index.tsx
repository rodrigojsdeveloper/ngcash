import ngcashLogo from "../../assets/NgCash.png";
import { Container } from "../Register/style";
import { Form } from "../../components/Form";

const Session = () => {
  return (
    <Container>
      <div className="divBlack">
        <img src={ngcashLogo} alt="logo ng.cash" />
      </div>

      <div className="divWhite">
        <Form
          apiProp="signin"
          historyProp="home"
          titleProp="Log in"
          textProp="Don't have an account yet? "
          linkProp=""
          textLinkProp="go to register"
        />
      </div>
    </Container>
  );
};

export { Session };
