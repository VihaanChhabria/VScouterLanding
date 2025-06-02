import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import { SocialIcon } from 'react-social-icons'
import ChiefDelphiIcon from '../../common/ChiefDelphiIcon.png';

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  largeImage,
  socialLinks,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col
            lg={largeImage == true ? 15 : 11}
            md={largeImage == true ? 15 : 11}
            sm={12}
            xs={24}
          >
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col
            lg={largeImage == true ? 8 : 11}
            md={largeImage == true ? 8 : 11}
            sm={11}
            xs={24}
          >
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexDirection: "row",
                marginBottom: "1.5rem",
              }}>

                {socialLinks && socialLinks.map((link, index) => {
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
              
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map(
                    (
                      item: {
                        color?: string;
                        title: string;
                      },
                      id: number
                    ) => {
                      return (
                        <Button
                          key={id}
                          color={item.color}
                          onClick={() => scrollTo("about")}
                        >
                          {t(item.title)}
                        </Button>
                      );
                    }
                  )}
              </ButtonWrapper>

              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map(
                      (
                        item: {
                          title: string;
                          content: string;
                          icon: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Col key={id} span={11}>
                            <SvgIcon
                              src={item.icon}
                              width="60px"
                              height="60px"
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
                          </Col>
                        );
                      }
                    )}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
