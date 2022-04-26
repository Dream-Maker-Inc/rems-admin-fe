import styled from "@emotion/styled";
import { MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Border = "1px solid #eeeeee33";

export const Body = () => {
    const actions = ["유선 상담1", "유선 상담2", "유선 상담3"];
    const [action, setAction] = useState(actions[0]);
    const handleActionChange = (v) => setAction(v);

    const [content, setContent] = useState("");
    const handleContentChange = (v) => setContent(v);

    return (
        <Root>
            <Row>
                <HeaderCell height={"60px"}>
                    <Typography>조치 방법</Typography>
                </HeaderCell>
                <DataCell height={"60px"}>
                    <CustomSelector
                        items={actions}
                        value={action}
                        onChange={(e) => handleActionChange(e.target.value)}
                    />
                </DataCell>
            </Row>

            <Row>
                <HeaderCell>
                    <Typography>조치 내용</Typography>
                </HeaderCell>
                <DataCell>
                    <TextField
                        multiline
                        rows={4}
                        value={content}
                        placeholder={"조치 내용 입력"}
                        onChange={(e) => handleContentChange(e.target.value)}
                    />
                </DataCell>
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
    justify-content: center;
    align-items: flex-end;
    padding: 12px;
    border-right: ${Border};
`;

const DataCell = styled(Stack)`
    background-color: #3a3f43;
    width: 100%;
    justify-content: center;
    padding: 12px;

    color: #eee;
`;

const CustomSelector = ({ value, onChange, items }) => (
    <Select fullWidth size="small" value={value} onChange={onChange}>
        {items.map((it) => (
            <MenuItem key={it} value={it}>
                {it}
            </MenuItem>
        ))}
    </Select>
);
