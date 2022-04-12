const LogoUrl = `${process.env.PUBLIC_URL}/assets/images/logo_REMS_login_m.png`;

export const LoginLogo = () => {
    return (
        <img
            src={LogoUrl}
            alt={"logo"}
            style={{ width: "100%", height: "100%" }}
        />
    );
};
