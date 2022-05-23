import {
    KeyboardDoubleArrowLeftRounded,
    KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import {
    Button,
    Checkbox,
    Stack,
    TableBody,
    TableHead,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import { LabelWithCircle } from "../../../../../common/LabelWithCircle";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../../../../common/tables/BasicTable";
import { useTransferList } from "./hooks/useTransferList";
import { transferListModel } from "./models/TransferList.model";

/*
models: {
    id: number;
    assigned: boolean;
    siteName: string;
    address: string;
    createdAt: string;
}[]
*/

export const TransferList = () => {
    const transferListProps = {
        models: transferListModel,
        left: {
            title: "할당된 사이트 목록",
        },
        right: {
            title: "미할당 사이트 목록",
        },
    };
    const { models, left, right } = transferListProps;

    const headers = [
        { label: "사이트명" },
        { label: "주소" },
        { label: "설치일" },
    ];

    const {
        leftData,
        leftStateModels,
        rightData,
        rightStateModels,
        handleTransferRight,
        handleTransferLeft,
    } = useTransferList(models);

    const {
        findCheckedById: findLeftCheckedById,
        handleCheckedChange: handleLeftCheckedChange,
        isCheckedAll: isLeftCheckedAll,
        handleCheckAllClick: handleLeftCheckedAllClick,
    } = leftStateModels;

    const {
        findCheckedById: findRightCheckedById,
        handleCheckedChange: handleRightCheckedChange,
        isCheckedAll: isRightCheckedAll,
        handleCheckAllClick: handleRightCheckedAllClick,
    } = rightStateModels;

    return (
        <Stack direction="row" spacing={"48px"} alignItems={"center"}>
            <TitleWithListView title={left.title}>
                <ListView
                    headers={headers}
                    models={leftData}
                    findCheckedById={findLeftCheckedById}
                    handleCheckedChange={handleLeftCheckedChange}
                    isCheckedAll={isLeftCheckedAll}
                    handleCheckAllClick={handleLeftCheckedAllClick}
                />
            </TitleWithListView>

            <Stack spacing={"24px"}>
                <TransferButton onClick={handleTransferRight}>
                    <KeyboardDoubleArrowRightRounded />
                </TransferButton>

                <TransferButton onClick={handleTransferLeft}>
                    <KeyboardDoubleArrowLeftRounded />
                </TransferButton>
            </Stack>

            <TitleWithListView title={right.title}>
                <ListView
                    headers={headers}
                    models={rightData}
                    findCheckedById={findRightCheckedById}
                    handleCheckedChange={handleRightCheckedChange}
                    isCheckedAll={isRightCheckedAll}
                    handleCheckAllClick={handleRightCheckedAllClick}
                />
            </TitleWithListView>
        </Stack>
    );
};

const TitleWithListView = ({ title, children }) => (
    <Stack spacing={"8px"} width={"100%"}>
        <LabelWithCircle title={title} />
        {children}
    </Stack>
);

const ListView = ({
    headers,
    models,
    findCheckedById,
    handleCheckedChange,
    isCheckedAll,
    handleCheckAllClick,
}) => {
    // row 포커스 유지
    const [selectedRowId, setSelectedRowId] = useState(0);
    const handleSelectedRowId = (id) => setSelectedRowId(id);
    const isSelectedRow = (id) => id === selectedRowId;

    return (
        <BasicTableContainer sx={{ height: "480px" }}>
            <BasicTable>
                <TableHead>
                    <TableRow>
                        <BasicTh width={"fit-content"}>
                            <Checkbox
                                checked={isCheckedAll}
                                onChange={handleCheckAllClick}
                            />
                        </BasicTh>

                        {headers.map((it) => (
                            <BasicTh key={it.label} width={it.width}>
                                {it.label}
                            </BasicTh>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {models?.map(({ id, ...rest }) => (
                        <BasicTdRow
                            key={id}
                            selected={isSelectedRow(id)}
                            onClick={() => handleSelectedRowId(id)}
                        >
                            <BasicTd width={"fit-content"} padding={"4px"}>
                                <Checkbox
                                    checked={findCheckedById(id)}
                                    onChange={(_, checked) =>
                                        handleCheckedChange(id, checked)
                                    }
                                />
                            </BasicTd>

                            {Object.values(rest).map((it, index) => (
                                <BasicTd key={index} padding={"4px"}>
                                    {it}
                                </BasicTd>
                            ))}
                        </BasicTdRow>
                    ))}
                </TableBody>
            </BasicTable>
        </BasicTableContainer>
    );
};

const TransferButton = ({ onClick, children }) => (
    <Button
        variant={"contained"}
        color={"primary"}
        size={"large"}
        onClick={onClick}
        sx={{
            padding: "12px",
            minWidth: "fit-content",
            width: "fit-content",
        }}
    >
        {children}
    </Button>
);
