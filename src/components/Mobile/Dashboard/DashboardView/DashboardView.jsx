import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab/ScrollContainerWithTopFab";
import { GearStateItem } from "../../../common/GearStateItem";
import { SectionTemplate } from "../../common/SectionTemplate/Section.template";
import { HeadInfo } from "../HeadInfo/HeadInfo";

export const DashboardView = () => {
    const models = [
        {
            gearName: "에어컨(냉방)",
            data: [
                {
                    name: "거실1",
                    state: {
                        label: "가동",
                        isRun: true,
                    },
                    temperature: "26",
                },
                {
                    name: "거실2",
                    state: {
                        label: "가동",
                        isRun: true,
                    },
                    temperature: "26",
                },
                {
                    name: "거실3",
                    state: {
                        label: "중지",
                        isRun: false,
                    },
                    temperature: "26",
                },
                {
                    name: "거실4",
                    state: {
                        label: "중지",
                        isRun: false,
                    },
                    temperature: "26",
                },
            ],
        },
        {
            gearName: "조명",
            data: [
                {
                    name: "거실1",
                    state: {
                        label: "점등",
                        isRun: true,
                    },
                },
                {
                    name: "거실2",
                    state: {
                        label: "점등",
                        isRun: true,
                    },
                },
                {
                    name: "거실3",
                    state: {
                        label: "소등",
                        isRun: false,
                    },
                },
                {
                    name: "거실4",
                    state: {
                        label: "소등",
                        isRun: false,
                    },
                },
            ],
        },
        {
            gearName: "보일러(난방)",
            data: [
                {
                    name: "전체",
                    state: {
                        label: "정지",
                        isRun: false,
                    },
                },
            ],
        },
        {
            gearName: "전열교환기",
            data: [
                {
                    name: "전체",
                    state: {
                        label: "가동",
                        isRun: true,
                    },
                    temperature: "22",
                },
            ],
        },
    ];

    const renderGridData = (data) =>
        data.map((it) => <GearStateItem key={it.name} model={it} />);

    return (
        <ScrollContainerWithTopFab>
            <HeadInfo />

            <Stack spacing={"16px"} py={"16px"}>
                {models.map(({ gearName, data }) => (
                    <SectionTemplate key={gearName} title={gearName}>
                        <GridContainer>{renderGridData(data)}</GridContainer>
                    </SectionTemplate>
                ))}
            </Stack>
        </ScrollContainerWithTopFab>
    );
};

const GridContainer = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`;
