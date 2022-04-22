import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab";
import { PopupTemplate } from "../PopupTemplate/PopupTemplate";

/* 
const items = [
    {
        id: 1,
        title: "거실1/전열/교환기/에러발생",
        createdAt: "2021.01.01",
    },
    {
        id: 2,
        title: "거실1/전열/교환기/에러발생",
        createdAt: "2021.01.01",
    },
    {
        id: 3,
        title: "거실1/전열/교환기/에러발생",
        createdAt: "2021.01.01",
    },
];

const handleItemShow = (id) => alert(id);
*/

export const ListPopupTemplate = ({
    open,
    onClose,
    title,
    items,
    handleItemShow,
}) => {
    return (
        <PopupTemplate open={open} onClose={onClose} title={title}>
            <Stack>
                <Stack direction={"row"} bgcolor={"#eee"}>
                    <IndexHeaderCell>
                        <HeaderTypo>번호</HeaderTypo>
                    </IndexHeaderCell>

                    <TitleHeaderCell>
                        <HeaderTypo>제목</HeaderTypo>
                    </TitleHeaderCell>

                    <DateHeaderCell>
                        <HeaderTypo>등록일자</HeaderTypo>
                    </DateHeaderCell>
                </Stack>

                <ScrollContainerWithTopFab>
                    {items.map((it) => (
                        <Stack
                            direction={"row"}
                            borderBottom={"1px solid #eee"}
                        >
                            <IndexItemCell>{it.id}</IndexItemCell>
                            <TitleItemCell>{it.title}</TitleItemCell>
                            <DateItemCell>
                                <Typography>{it.createdAt}</Typography>
                                <ShowButton
                                    onClick={() => handleItemShow(it.id)}
                                />
                            </DateItemCell>
                        </Stack>
                    ))}
                </ScrollContainerWithTopFab>
            </Stack>
        </PopupTemplate>
    );
};

const st = {
    indexCell: css`
        width: 140px;
        height: 24px;
        margin: 8px 0;
        padding: 0 8px;
        align-items: center;
        justify-content: center;
    `,
    titleCell: css`
        width: 100%;
        height: 24px;
        margin: 8px 0;
        padding: 0 16px;
        justify-content: center;
    `,
    dateCell: css`
        width: 340px;
        height: 24px;
        margin: 8px 0;
        padding: 0 16px;
        justify-content: center;
    `,
};

const IndexHeaderCell = styled(Stack)`
    ${st.indexCell}
    border-right: 1px solid #ccc;
`;
const TitleHeaderCell = styled(Stack)`
    ${st.titleCell}
    align-items: center;
    border-right: 1px solid #ccc;
`;
const DateHeaderCell = styled(Stack)`
    ${st.dateCell}
`;

const IndexItemCell = styled(Stack)`
    ${st.indexCell}
`;
const TitleItemCell = styled(Stack)`
    ${st.titleCell}
`;
const DateItemCell = styled(Stack)`
    ${st.dateCell}
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;

const HeaderTypo = ({ children }) => (
    <Typography variant="subtitle1" fontWeight={500}>
        {children}
    </Typography>
);

const ShowButton = ({ onClick }) => (
    <Button
        variant="contained"
        size="small"
        sx={{
            minWidth: "48px",
            padding: "2px 0",
        }}
        onClick={onClick}
    >
        조회
    </Button>
);
