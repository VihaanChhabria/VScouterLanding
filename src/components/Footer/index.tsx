import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import { SocialIcon } from 'react-social-icons'
import ChiefDelphiIcon from '../../common/ChiefDelphiIcon.png';

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="VScouterLogoLong.svg"
                  aria-label="homepage"
                  width="300px"
                  height="auto"
                />
              </LogoContainer>
            </NavLink>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexDirection: "row",
              }}>

                {["https://github.com/VihaanChhabria/VScouter", "https://www.chiefdelphi.com/t/vscouter-scouting-app-2025/"].map((link, index) => {
                  if (link.startsWith("https://www.chiefdelphi.com")) {
                    return (
                      <img src={ChiefDelphiIcon}
                        style={{ width: 55, height: 55, cursor: 'pointer' }}
                        key={index} onClick={() => {
                          const newWindow = window.open(link, '_blank');
                          if (newWindow) {
                            newWindow.focus();
                          }
                        }} />
                    )
                  }
                  return (
                    <SocialIcon
                      key={index}
                      url={link}
                      target="_blank"
                    />
                  );
                })}

              </div>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
