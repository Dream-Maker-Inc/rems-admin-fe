import styled from "@emotion/styled";
import {
    Button,
    Checkbox,
    FormControlLabel,
    Stack,
    Typography,
} from "@mui/material";
import { ScreenType } from "../../../../themes/Limit";
import { GearStateItem } from "../../common/GearStateItem";

export const ControlCheckArea = () => {
    const handleSubmit = () => alert("ok");

    return (
        <Stack component={"section"} width={"100%"}>
            <AreaHead>
                <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography>전체 선택</Typography>}
                    sx={{ width: "fit-content" }}
                />
            </AreaHead>

            <AreaContents>
                <GridContainer>
                    <GearStateItem
                        model={{
                            name: "거실1",
                            state: {
                                label: "가동",
                                isRun: true,
                            },
                            temperature: "26",
                        }}
                        checkboxModel={{
                            value: true,
                            onChange: (checked) => alert(checked),
                        }}
                    />
                    <GearStateItem
                        model={{
                            name: "거실2",
                            state: {
                                label: "가동",
                                isRun: true,
                            },
                            temperature: "26",
                        }}
                        checkboxModel={{
                            value: false,
                            onChange: (checked) => alert(checked),
                        }}
                    />
                    <GearStateItem
                        model={{
                            name: "거실3",
                            state: {
                                label: "중지",
                                isRun: false,
                            },
                            temperature: "26",
                        }}
                        checkboxModel={{
                            value: false,
                            onChange: (checked) => alert(checked),
                        }}
                    />
                    <GearStateItem
                        model={{
                            name: "거실4",
                            state: {
                                label: "중지",
                                isRun: false,
                            },
                            temperature: "26",
                        }}
                        checkboxModel={{
                            value: false,
                            onChange: (checked) => alert(checked),
                        }}
                    />
                </GridContainer>

                <ButtonWrapper>
                    <Button
                        variant={"contained"}
                        size={"large"}
                        onClick={handleSubmit}
                    >
                        제어
                    </Button>
                </ButtonWrapper>
            </AreaContents>
        </Stack>
    );
};

const GridContainer = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;

    @media (max-width: ${ScreenType.xs}px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const AreaHead = ({ children }) => (
    <Stack width={"100%"} bgcolor={"#eee"} p={"8px 16px"}>
        {children}
    </Stack>
);

const AreaContents = ({ children }) => (
    <Stack bgcolor={"#fff"}>{children}</Stack>
);

const ButtonWrapper = ({ children }) => (
    <Stack width={"100%"} p={"16px 36px 36px 36px"}>
        {children}
    </Stack>
);
