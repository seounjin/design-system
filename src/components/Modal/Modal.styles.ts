import styled from "styled-components";
import theme from "../../styles";

export const Layout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 0.6);
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;  
  max-width: 380px;  
  padding: 20px;
  border-radius: 10px;
  background-color: ${theme.colors.sjWhite}};
`;

export const Header = styled.header`
  font-size: 20px;
  font-weight: 600;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
