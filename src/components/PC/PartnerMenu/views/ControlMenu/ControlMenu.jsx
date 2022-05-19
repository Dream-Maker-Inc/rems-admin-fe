import {
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    TableBody,
    TableHead,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../../../common/tables/BasicTable";
import { useSelectedRow } from "../../../../common/tables/BasicTable/useSelectedRow";

export const ControlMenu = () => {
    const models = Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: "대시보드",
        used: false,
        initialScreen: {
            readOnly: true, // 체크박스 비활성화 여부
            value: false,
        },
        permissions: {
            read: false,
            write: false,
        },
    }));

    const [states, setStates] = useState(models);
    const handleUsedChange = (v, index) => {
        states[index].used = v;
        setStates([...states]);
    };
    const handleInitialScreenChange = (v, index) => {
        states[index].initialScreen.value = v;
        setStates([...states]);
    };
    const handleReadPermissionChange = (v, index) => {
        states[index].permissions.read = v;
        setStates([...states]);
    };
    const handleWritePermissionChange = (v, index) => {
        states[index].permissions.write = v;
        setStates([...states]);
    };

    const headers = [
        { label: "메뉴명" },
        { label: "사용여부" },
        { label: "초기화면" },
        { label: "읽기권한" },
        { label: "쓰기권한" },
    ];

    const { isSelectedRow, handleSelectedRowId } = useSelectedRow();

    return (
        <BasicTableContainer sx={{ height: "600px" }}>
            <BasicTable>
                <TableHead>
                    <TableRow>
                        {headers.map((it) => (
                            <BasicTh key={it.label} width={it.width}>
                                {it.label}
                            </BasicTh>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {models.map(({ id, ...rest }, index) => (
                        <BasicTdRow
                            key={id}
                            selected={isSelectedRow(id)}
                            onClick={() => handleSelectedRowId(id)}
                        >
                            <LocalBasicTd>{rest.name}</LocalBasicTd>
                            <LocalBasicTd>
                                <CustomRadioGroup
                                    items={[
                                        {
                                            value: true,
                                            label: "사용",
                                        },
                                        {
                                            value: false,
                                            label: "미사용",
                                        },
                                    ]}
                                    value={states[index].used}
                                    onChange={(_, v) =>
                                        handleUsedChange(v, index)
                                    }
                                />
                            </LocalBasicTd>
                            <LocalBasicTd>
                                <Checkbox
                                    disabled={
                                        states[index].initialScreen.readOnly
                                    }
                                    value={states[index].initialScreen.value}
                                    onChange={(_, checked) =>
                                        handleInitialScreenChange(
                                            checked,
                                            index
                                        )
                                    }
                                />
                            </LocalBasicTd>
                            <LocalBasicTd>
                                <CustomRadioGroup
                                    items={[
                                        {
                                            value: true,
                                            label: "있음",
                                        },
                                        {
                                            value: false,
                                            label: "없음",
                                        },
                                    ]}
                                    value={states[index].permissions.read}
                                    onChange={(_, v) =>
                                        handleReadPermissionChange(v, index)
                                    }
                                />
                            </LocalBasicTd>
                            <LocalBasicTd>
                                <CustomRadioGroup
                                    items={[
                                        {
                                            value: true,
                                            label: "있음",
                                        },
                                        {
                                            value: false,
                                            label: "없음",
                                        },
                                    ]}
                                    value={states[index].permissions.write}
                                    onChange={(_, v) =>
                                        handleWritePermissionChange(v, index)
                                    }
                                />
                            </LocalBasicTd>
                        </BasicTdRow>
                    ))}
                </TableBody>
            </BasicTable>
        </BasicTableContainer>
    );
};

const LocalBasicTd = ({ children }) => (
    <BasicTd padding={"4px 16px"}>{children}</BasicTd>
);

const CustomRadioGroup = ({ items, value, onChange }) => (
    <RadioGroup
        row
        value={value}
        onChange={onChange}
        sx={{
            justifyContent: "center",
            gap: "16px",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
        }}
    >
        {items.map(({ value, label }, index) => (
            <FormControlLabel
                key={index}
                value={value}
                control={<Radio />}
                label={label}
            />
        ))}
    </RadioGroup>
);
