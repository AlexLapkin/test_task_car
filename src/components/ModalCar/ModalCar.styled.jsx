import styled from '@emotion/styled';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props =>
    props.specialLook ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
  /* width: 100vw;
     height: 100vh; */
  &:hover {
    cursor: pointer;
  }
  .modal {
    padding: 40px;
    width: 461px;
    height: 672px;
    background-color: white;
    border-radius: 24px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
  }

  .closeBtn {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const CarPhoto = styled.img`
  display: block;
  width: 461px;
  height: 248px;
  border-radius: 14px;
`;

export const ButtonRent = styled.a`
  display: block;
  width: 168px;
  height: 40px;
  border-radius: 12px;
  background-color: #3470ff;
  text-decoration: none;
  text-align: center;
  // padding-left: 50px;
  // padding-right: 50px;
  padding-top: 12px;
  color: white;
  border: none;
  margin-bottom: 20px;
  margin-top: 35px;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
`;

export const TextAdd = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const IconClose = styled.svg`
  width: 18px;
  height: 18px;
  stroke: black;
  fill: none;
`;

export const BtnClose = styled.button`
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
`;
