import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

const Border = "1px solid #ccc";

export const PowerUsageInfo = () => {
    const headers = ["년월", "전력사용량"];

    const models = [
        {
            date: "2021-01",
            value: 0.9,
        },
        {
            date: "2021-02",
            value: 0.8,
        },
        {
            date: "2021-03",
            value: 0.7,
        },
        {
            date: "2021-04",
            value: 0.6,
        },
        {
            date: "2021-05",
            value: 0.5,
        },
        {
            date: "2021-06",
            value: 0.4,
        },
        {
            date: "2021-07",
            value: 0.3,
        },
        {
            date: "2021-08",
            value: 0.2,
        },
    ];

    const isLastElement = (index) => index === headers.length - 1;
    const toValues = (data) => Object.values(data);

    const renderDataCells = (dataArray) =>
        dataArray.map((it, index) => (
            <DataCell key={it} borderRight={isLastElement(index) ? "" : Border}>
                {it}
            </DataCell>
        ));

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

            {models.map((it, index) => (
                <Row key={index} borderTop={Border}>
                    {renderDataCells(toValues(it))}
                </Row>
            ))}
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
