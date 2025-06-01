import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { AboutMeProps } from "./types";
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

const AboutMe = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  largeImage,
}: AboutMeProps) => {
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
              
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map(
                      (
                        item
                      ) => {
                        return (
                          item
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

export default withTranslation()(AboutMe);
