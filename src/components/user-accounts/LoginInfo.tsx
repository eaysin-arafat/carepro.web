import { ErrorsType, LoginInfoType } from "@/types/user-accounts";
import Input from "../core/form-elements/Input";
import Password from "../core/form-elements/Password";
import FormSection from "../core/form-layouts/FormSection";

interface Props {
  loginInfo: LoginInfoType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: ErrorsType;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  username: string;
  isUsernameValid?: boolean;
}

function LoginInfo({
  handleChange,
  loginInfo,
  errors,
  handleUsernameChange,
  isUsernameValid,
  username,
}: Props) {
  return (
    <>
      <FormSection titleText="Login Information">
        <>
          <div className="">
            <Input
              required
              label="User Name"
              placeholder="Add User Name"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              errMsg={
                errors?.username ||
                (!isUsernameValid ? "Username already exists" : "")
              }
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-4">
            <Password
              required
              label="Password"
              placeholder="Minimum 8 characters"
              value={loginInfo.password}
              onChange={handleChange}
              name="password"
              errMsg={errors?.password}
            />
            <Password
              required
              label="Confirm Password"
              placeholder="Minimum 8 characters"
              value={loginInfo.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              errMsg={errors?.confirmPassword}
            />
          </div>
        </>
      </FormSection>
    </>
  );
}

export default LoginInfo;
