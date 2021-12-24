import React from "react";
import {
  AuthLogoImage,
  Container,
  CustomModal,
  ModalSection,
  Wrapper,
} from "./AuthScreenComponents";

const AuthScreensLayout = ({ children }) => {
  return (
    <Container>
      <CustomModal>
        <ModalSection>
          <div className="form_container">
            <AuthLogoImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
              alt="logo"
            />
            {children}
          </div>
        </ModalSection>
        <ModalSection img>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image1"
          />
          <div className="overlay"></div>
        </ModalSection>
      </CustomModal>
      <Wrapper bg="#f4eeeb"></Wrapper>
      <Wrapper bg="#66180d"></Wrapper>
    </Container>
  );
};

export default AuthScreensLayout;
