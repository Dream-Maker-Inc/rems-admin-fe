import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

const Border = "1px solid #ccc";

export const PowerUsageInfo = () => {
    const headers = ["년월", "전력사용량"];
    const data = {
        date: "2021.01",
        usedPower: "100",
    };
    const isLastElement = (index) => index === headers.length - 1;

    const dataArray = Object.values(data);

    return (
        <Root>
            <Row>
                {headers.map((it, index) => (
                    <HeaderCell
                        key={it}
                        borderRight={isLastElement(index) ? "" : Border}
                    >
                        {it}
                    </HeaderCell>
                ))}
            </Row>

            <Row borderTop={Border}>
                {dataArray.map((it, index) => (
                    <DataCell
                        key={it}
                        borderRight={isLastElement(index) ? "" : Border}
                    >
                        {it}
                    </DataCell>
                ))}
            </Row>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        border={Border}
        borderRadius={"4px"}
        width={"100%"}
        textAlign={"center"}
        overflow={"hidden"}
    >
        {children}
    </Stack>
);

const Row = styled(Stack)`
    flex-direction: row;
    justify-content: space-between;
`;

const HeaderCell = ({ children, borderRight }) => (
    <Stack width={"100%"} bgcolor={"#eee"} borderRight={borderRight}>
        <Typography
            variant="subtitle1"
            gutterBottom
            p={"2px"}
            sx={{ opacity: 0.8 }}
        >
            {children}
        </Typography>
    </Stack>
);

const DataCell = ({ children, borderRight }) => (
    <Stack width={"100%"} borderRight={borderRight}>
        <Typography
            variant="body1"
            gutterBottom
            p={"4px"}
            sx={{ opacity: 0.8 }}
        >
            {children}
        </Typography>
    </Stack>
);
