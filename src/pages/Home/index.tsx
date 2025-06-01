import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <MiddleBlock
        title={"Getting Started Playlist"}
        content={
          "New to VScouter? Check out our video playlist for a step-by-step guide on how to set up, and start scouting with ease. From installation to syncing and analytics, we've got you covered."
        }
        button={"Watch the Playlist"}
      />
      <ContentBlock
        direction="right"
        title={"Scouting UI Demo"}
        content={
          "Explore the clean and efficient UI that scouters use to collect real-time match data. This walkthrough showcases the actual pages used during competition — optimized for speed, clarity, and ease of use on any device."
        }
        icon="MatchScoutingInterfacePreview.gif"
        id="mission"
        largeImage={true}
        button={[
          {
            title: "Scouting UI Docs",
          },
        ]}
      />
      <ContentBlock
        direction="left"
        title={"Analytics Demo"}
        content={
          "Get a look at VScouter's analytics powered by Power BI. This preview showcases the prebuilt dashboard included with the app — featuring team insights and performance visualizations. The file is fully editable, so you can customize it to fit your team's strategy needs with ease."
        }
        icon="AnalyticsPreview.gif"
        id="mission"
        largeImage={true}
        button={[
          {
            title: "Analytics Docs",
          },
        ]}
      />
      <ContentBlock
        direction="left"
        title={"About the Developer"}
        content={"Hi, I'm Vihaan Chhabria, a high school student and FRC developer. I built VScouter to give teams a fast, offline-ready scouting tool that works on any device. It's open-source and built from real competition experience; designed to make scouting simple and reliable for everyone."}
        icon="VihaanProfilePic.png"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
