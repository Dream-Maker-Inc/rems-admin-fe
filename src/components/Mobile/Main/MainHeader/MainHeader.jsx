import styled from "@emotion/styled";
import { MenuRounded, RefreshRounded } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

export const MainHeader = () => {
    const title = "화면레이아웃";

    // 사이드 메뉴 토글
    const [openSide, setOpenSide] = useState(false);
    const handleSideMenuToggle = () => setOpenSide((old) => !old);

    // refresh
    const handleRefresh = () => alert("refresh");

    return (
        <AppBar position="static" elevation={1}>
            <Toolbar
                disableGutters
                sx={{
                    bgcolor: "primary.main",
                    borderBottom: "1px solid #eeeeee33",
                    px: "8px",
                }}
            >
                <Inner>
                    <IconButton onClick={handleSideMenuToggle}>
                        <MenuRounded htmlColor={"#fff"} />
                    </IconButton>

                    <Typography variant="h6">{title}</Typography>

                    <IconButton onClick={handleRefresh}>
                        <RefreshRounded htmlColor={"#fff"} />
                    </IconButton>
                </Inner>
            </Toolbar>
        </AppBar>
    );
};

const Inner = styled(Stack)`
    position: relative;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
