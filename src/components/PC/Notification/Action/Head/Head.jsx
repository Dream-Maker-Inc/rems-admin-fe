import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

const Border = "1px solid #eeeeee33";

export const Head = () => {
    const model = {
        siteName: "편백경로당",
        gear: "거실 화재감지기",
        error: "화재 발생",
        createdAt: "2021.09.01 00:00:00",
    };

    return (
        <Root>
            <Row>
                <HeaderCell>
                    <Typography>사이트명</Typography>
                </HeaderCell>
                <DataCell>{model.siteName}</DataCell>
            </Row>

            <Stack direction={"row"}>
                <Row>
                    <HeaderCell>
                        <Typography>설비명</Typography>
                    </HeaderCell>
                    <DataCell borderRight={Border}>{model.gear}</DataCell>
                </Row>
                <Row>
                    <HeaderCell>
                        <Typography>장애내용</Typography>
                    </HeaderCell>
                    <DataCell>{model.error}</DataCell>
                </Row>
            </Stack>

            <Row>
                <HeaderCell>
                    <Typography>발생 일시</Typography>
                </HeaderCell>
                <DataCell>{model.createdAt}</DataCell>
            </Row>
        </Root>
    );
};

const Root = styled(Stack)`
    color: #fff;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
`;

const Row = styled(Stack)`
    flex-direction: row;
    width: 100%;
    border-bottom: ${Border};
`;

const HeaderCell = styled(Stack)`
    background-color: #3f464c;
    min-width: 120px;
    height: 40px;
    justify-content: center;
    align-items: flex-end;
    padding: 12px;
    border-right: ${Border};
`;

const DataCell = styled(Stack)`
    background-color: #3a3f43;
    width: 100%;
    height: 40px;
    justify-content: center;
    padding: 12px;

    color: #eee;
`;
