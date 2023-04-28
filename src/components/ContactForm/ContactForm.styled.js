import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 16px;
  margin-bottom: 44px;
  border: 1px solid #f5f4fa;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.03em;
`;

export const FormField = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Field = styled(FormikField)`
  padding: 20px 16px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  &:hover {
    border-color: #4e4b42;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    border-color: #4e4b42;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const ErrorMessage = styled(FormikError)`
  padding: 4px 16px;
  text-align: center;
  color: tomato;
`;

export const Button = styled.button`
  padding: 12px 20px;
  margin-top: 12px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  outline: none;

  background-color: #ffa726;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #141210;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ffa726;
    color: #fff;
    scale: 1.05;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
