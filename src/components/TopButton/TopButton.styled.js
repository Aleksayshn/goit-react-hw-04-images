import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 50;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  color: #e0e0e0;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  opacity: 0.8;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #7eadc4;
  }
`;
