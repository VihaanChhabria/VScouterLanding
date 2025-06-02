import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      if (element) {
        const yOffset = -40;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("Features")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("demo")}>
          <Span>{t("Demos")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => {
            const newWindow = window.open("https://vscouter-docs.netlify.app/", '_blank');
            if (newWindow) {
              newWindow.focus();
            }
          }}
        >
          <Span>
            <Button>{t("Get Started")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="VScouterLogoLong.svg" width="300px" height="auto" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
