import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import { laptopColor } from "../../../../themes/Color";

export const CustomTabs = ({ items, value, onChange }) => {
    return (
        <StyledTabs value={value} onChange={onChange}>
            {items.map((it) => (
                <StyledTab key={it} label={it} value={it} />
            ))}
        </StyledTabs>
    );
};

const StyledTabs = styled(Tabs)`
    min-height: fit-content;
    border-bottom: 2px solid ${laptopColor.primary};
    overflow: unset;

    & .MuiTabs-flexContainer {
        gap: 4px;
    }

    & .MuiTabs-indicator {
        display: none;
    }

    & .MuiTabs-scroller {
        overflow: visible !important;
    }
`;

const StyledTab = styled(Tab)`
    width: 160px;
    min-height: 36px;
    padding: 0;
    margin-bottom: -2px;
    z-index: 3;

    transition: all ease-in-out 0.1s;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-top: 2px;
    border-left: 2px;
    border-right: 2px;
    border-style: solid;

    border-color: #eeeeee33;

    &.Mui-selected {
        border-color: ${laptopColor.primary};
        border-bottom: 2px solid #3a3f43;
    }
`;
