import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
`;

export const ModalContent = styled.div`
  max-width: 100vw;

  @media (min-width: 320px) {
    max-width: calc(100vw - 48px);
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 80%;
  }

  @media (min-width: 1200px) {
    min-width: 65%;
  }
`;
