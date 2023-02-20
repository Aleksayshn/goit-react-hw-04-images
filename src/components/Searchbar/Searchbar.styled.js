import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-bottom: 16px;
  padding: 12px 24px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  :focus {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  align-items: center;
  width: 100%;
  font: inherit;
  font-size: 25px;
  border: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
