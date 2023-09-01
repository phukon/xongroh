import LoginForm from "./LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  return (
    <>
      <h1 className="p-10 text-center text-xl font-medium text-orange-400">
        Welcome back
      </h1>
      <div className="text-center">{userIcon}</div>
      <LoginForm />
    </>
  );
};

export default LoginPage;
