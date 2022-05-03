import { Stack } from "@mui/material";
import { UnifiedSearch } from "../UnifiedSearch";
import { SiteSearch } from "../SiteSearch";
import { SiteSearchWithDate } from "../SiteSearchWithDate";
import { SiteList } from "../SiteList/SiteList";
import styled from "@emotion/styled";

export const SearchGridView = () => {
    return (
        <Root>
            <UnifiedSearch />
            <SiteSearch />
            <SiteSearchWithDate />
            <SiteList />
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    height: 100%;
    padding: 24px;
    gap: 24px;
    background-color: #303539;
    overflow-y: auto;
`;
