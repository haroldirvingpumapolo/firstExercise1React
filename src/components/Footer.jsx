import Github from "../assets/SocialIcons/Github.svg";
import Twitter from "../assets/SocialIcons/Twitter.svg";
import LinkedIn from "../assets/SocialIcons/LinkedIn.svg";
const Footer = () => {
  const socialIcons = [Github, Twitter, LinkedIn];
  const socialIconsElements = socialIcons.map((e) => {
    return <img src={e} alt={e.split("/")[0]} />;
  });
  return (
    <footer class="main footer">
      <div class="container footer-container">
        <p>Johnathan Specter</p>
        <div>{socialIconsElements}</div>
      </div>
    </footer>
  );
};
export default Footer;
