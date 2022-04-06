const LogoUrl = `${process.env.PUBLIC_URL}/assets/images/logo_REMS_login.png`;

export const LoginLogo = () => {
  return <img src={LogoUrl} alt={"logo"}></img>;
};
