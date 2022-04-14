import { Stack } from "@mui/material";
import { useDetectScrollDirection } from "../../../../hooks/Scroll/UseDetectScrollDirection";
import { MoveTopFab } from "../../../common/MoveTopFab/MoveTopFab";
import { SitesListItem } from "../SitesListItem";

export const SitesList = () => {
    const models = generateMockSites();

    const { isPossibleScrollTop, isDirectionTop, handleScrollChange } =
        useDetectScrollDirection();

    const handleItemClick = (id) => alert(`clicked ${id}`);
    const handleMoveTop = (e) => console.log(e.target.c);

    return (
        <Root>
            <ScrollableContainer onScroll={handleScrollChange}>
                {models.map(({ id, ...model }) => (
                    <SitesListItem
                        key={id}
                        model={model}
                        onClick={() => handleItemClick(id)}
                    />
                ))}
            </ScrollableContainer>

            <MoveTopFab
                visible={isPossibleScrollTop && isDirectionTop}
                onClick={handleMoveTop}
            />
        </Root>
    );
};

// 가짜 데이터 목록 생성
const generateMockSites = () =>
    Array.from({ length: 10 }, (_, index) => ({
        id: index,
        title: `편백 경로당 ${index}`,
        address: "서울",
        createdAt: "2021.01.01",
    }));

const Root = ({ children }) => (
    <Stack
        position={"relative"}
        width={"100%"}
        height={"100%"}
        overflow={"hidden"}
    >
        {children}
    </Stack>
);

const ScrollableContainer = ({ onScroll, children }) => (
    <Stack width={"100%"} height={"100%"} overflow={"auto"} onScroll={onScroll}>
        {children}
    </Stack>
);
