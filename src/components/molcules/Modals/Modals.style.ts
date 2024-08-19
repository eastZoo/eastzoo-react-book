import styled from "styled-components";

export const ModalBg = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.black60};
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Modal = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.white100};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.shadows.modal};
  flex-direction: column;
`;

export const ModalTitBox = styled.div`
  display: flex;
  padding: 20px;
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 28px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContentBox = styled.div`
  display: flex;
  min-width: 300px;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  flex-direction: column;
  gap: 12px;

  .status_txt {
    display: inline-block;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.primary100};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const ModalGridBox = styled.div`
  min-width: 760px;
`;

export const ModalButtonBox = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
