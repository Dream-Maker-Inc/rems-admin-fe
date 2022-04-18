import styled from "@emotion/styled";
import { AppBar, Collapse, Stack, Toolbar, Typography } from "@mui/material";
import { DrawerProfile } from "./elements/DrawerProfile";
import { Menus } from "./elements/Menus";

export const MainDrawer = ({ isOpen }) => {
    return (
        <Stack height={"100%"}>
            <CollapseAnimation isOpen={isOpen}>
                <Surface>
                    <LogoSection />
                    <DrawerProfile />

                    <MenuSection>
                        <Menus />
                    </MenuSection>
                </Surface>
            </CollapseAnimation>
        </Stack>
    );
};

// 좌우 슬라이딩 애니메이션
const CollapseAnimation = ({ isOpen, children }) => (
    <Collapse orientation="horizontal" sx={{ height: "100%" }} in={isOpen}>
        {children}
    </Collapse>
);

// Drawer 배경
const Surface = styled(Stack)`
    min-width: 260px;
    height: 100%;
    background-color: #232629;
    overflow-y: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const LogoSection = () => (
    <AppBar position="static" elevation={1}>
        <Toolbar
            sx={{
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#23272a",
            }}
        >
            <Stack>
                <img src="/assets/images/logo_REMS_sidebar.png" alt="logo" />
            </Stack>
        </Toolbar>
    </AppBar>
);

const MenuSection = styled(Stack)`
    height: 100%;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;
