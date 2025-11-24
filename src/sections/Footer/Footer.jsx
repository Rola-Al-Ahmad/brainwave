import Section from "../../components/Section";
import Copyright from "./components/Copyright";
import SocialsList from "./components/SocialsList";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" aria-label="Footer section">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <Copyright />

        <SocialsList />
      </div>
    </Section>
  );
};

export default Footer;
