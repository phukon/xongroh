import RegisterForm from "./RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  return (
    <>
      <h1 className="p-10 text-center text-xl font-medium text-orange-400">
        Xongroh
      </h1>
      <div className="text-center">{userIcon}</div>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
