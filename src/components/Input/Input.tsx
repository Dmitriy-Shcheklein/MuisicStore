import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import * as S from '../../styled/styled';

const primaryColor = `#3f51b5`;
const transPosition = `top: 0; font-size: 0.9rem; color: ${primaryColor}; font-weight: bold`;


const StyledWrapper = styled(S.Container)`
  width: 100%;
  position: relative;
  height: 4rem;
  background-color: inherit;
  padding: 0;
`;
const StyledLabel = styled(S.TextField)`
  font-weight: bold;
  position: absolute;
  transition: 0.5s;
  left: 0.75rem;
  top: 1.5rem;
  display: inline-block;
  padding: 0 0.5rem;
  background-color: inherit;
  pointer-events: none;
  background-color: ${S.backgroundColor};
`;
const StyledInput = styled(S.Input)`
  width: 100%;
  height: 3rem;
  background: transparent;
  padding-left: 1rem;
  &:focus ~ ${StyledLabel} {
    ${transPosition}
  };
  &:valid ~ ${StyledLabel} {
    ${transPosition}
  };
  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px white;
    -webkit-text-fill-color: black;
  }
`;

const StyledText = styled(S.TextField)`
  position: absolute;
  top: -0.25rem;
  left: 1rem;
  color: #dc143c;
`;

interface InputProps {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  required?: boolean;
  value?: string;
  isError?: boolean;
  message?: string;
  isMessage2?: boolean;
  message2?: string;
  isMessage3?: boolean;
  message3?: string;
  validateRegExp?: RegExp;
  type?: string;
};

const Input: FC<InputProps> = (props) => {

  const [isValid, setIsValid] = useState(false);

  const { label, onChange, onBlur, onFocus, value, isError,
    isMessage2, isMessage3, message, message2, message3, validateRegExp,
    type = 'text' } = props;

  useEffect(() => {
    if (!!validateRegExp && !!value) {
      checkValidate(validateRegExp, value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])


  const checkValidate = (regExp: RegExp, value: string) => {
    setIsValid(regExp.test(value));
  }

  return (
    <S.Container fldir='column' style={{
      width: '100%', padding: '0', marginBottom: '1rem'
    }}>
      <StyledWrapper>
        <StyledInput
          style={{ borderColor: `${(isError && !isValid) ? '#dc143c' : primaryColor}` }}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          name={label}
          value={value}
          type={type}
          required />
        <StyledLabel
          as='label'
          htmlFor={label}>{label}</StyledLabel>
      </StyledWrapper>
      <S.Container
        juscontent='start'
        style={{ position: 'relative', width: '100%' }}>
        {(isError && !isValid) ?
          <StyledText as='small' size='0.85rem'>{message} &nbsp;</StyledText> : null
        }
        {isMessage2 ?
          <StyledText as='small' size='0.85rem'>{message2} &nbsp;</StyledText> : null
        }
        {isMessage3 ?
          <StyledText as='small' size='0.85rem'>{message3} &nbsp;</StyledText> : null
        }
      </S.Container>
    </S.Container >
  )
}

export default Input;
