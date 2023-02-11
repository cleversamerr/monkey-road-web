import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SharedForm from "components/common/shared-form";
import CustomInput from "components/common/custom-input";
import CustomButton from "components/common/custom-button";
import Loader from "components/loader";
import usersApi from "api/user/users";
import useAuth from "auth/useAuth";
import useQueryParams from "hooks/useQueryParams";
import { routes } from "client";
import useLocale from "hooks/useLocale";

const ResetPasswordForm = () => {
  const { i18n } = useLocale();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { emailOrPhone } = useQueryParams();
  const [context, setContext] = useState({
    code: "",
    password: "",
    confirmPassowrd: "",
    error: "",
    submitting: false,
  });

  const handleKeyChange = (key) => (e) => {
    const { value } = e.target;

    if (key === "code") {
      if (value.length === 5) return;

      for (let i = 0; i < value.length; i++) {
        const ascii = value.charCodeAt(i);
        if (ascii < 48 || ascii > 57) {
          return;
        }
      }
    }

    setContext({ ...context, [key]: value, error: "" });
  };

  const handleSubmit = async (e) => {
    let error = "";

    try {
      e.preventDefault();

      if (context.submitting) return;
      if (context.password !== context.confirmPassowrd) return;

      setContext({ ...context, submitting: true });

      const { code, password } = context;
      const res = await usersApi.common.resetPassword(
        emailOrPhone,
        code,
        password
      );

      const { user, token } = res.data;
      login(user, token);

      navigate(routes.home.navigate());
    } catch (err) {
      error = err?.response?.data?.message?.en || "Network error";
    } finally {
      setContext({ ...context, submitting: false, error });
    }
  };

  return (
    <SharedForm
      imageURL="/assets/images/form/forgot-password.svg"
      title={i18n("resetPasswordTitle")}
      subtitle={i18n("resetPasswordSubtitle")}
      onSubmit={handleSubmit}
    >
      <CustomInput
        type="code"
        title={i18n("code")}
        subtitle={`4 ${i18n("digits")}`}
        value={context.code}
        onChange={handleKeyChange("code")}
      />

      <CustomInput
        type="password"
        title={i18n("password")}
        value={context.password}
        onChange={handleKeyChange("password")}
      />

      <CustomInput
        type="password"
        title={i18n("confirmPassword")}
        value={context.confirmPassowrd}
        onChange={handleKeyChange("confirmPassowrd")}
      />

      {!!context.error && <ErrorText>{context.error}</ErrorText>}

      {context.submitting ? (
        <Loader />
      ) : (
        <CustomButton
          type="primary"
          title={i18n("resetPassword")}
          onClick={handleSubmit}
        />
      )}
    </SharedForm>
  );
};

const ErrorText = styled.span`
  color: #f00;
  font-size: 13px;
  font-weight: 500;
  margin-top: -7px;
`;

export default ResetPasswordForm;
