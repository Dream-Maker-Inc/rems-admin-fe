import { Card, Checkbox, Divider, Stack, Typography } from "@mui/material";
import { mobileColor } from "../../../../themes/Color";

/*    
    # model types 

    const model = {
        name: "거실1",
        state: true,
        temperature: "26",
    };

    const checkboxModel = {
        value: checked,
        onChange: handleCheckChange,
    };
*/

export const GearStateItem = ({ model, checkboxModel }) => {
    const { name, state, temperature } = model;

    return (
        <Card elevation={0} sx={{ width: "100%" }}>
            <Stack>
                {checkboxModel ? (
                    <GearNameWithCheckbox
                        name={name}
                        checkboxModel={checkboxModel}
                    />
                ) : (
                    <GearName name={name} />
                )}
                <StateSection state={state} temperature={temperature} />
            </Stack>
        </Card>
    );
};

const GearName = ({ name }) => (
    <Stack
        direction={"row"}
        bgcolor={"#bdbdbd"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"12px"}
    >
        <Typography variant="h6" sx={{ opacity: 0.6 }}>
            {name}
        </Typography>
    </Stack>
);

const GearNameWithCheckbox = ({ name, checkboxModel }) => (
    <Stack
        direction={"row"}
        bgcolor={"#bdbdbd"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"8px"}
    >
        <Checkbox
            value={checkboxModel.value}
            onChange={(e) => checkboxModel.onChange(e.target.value)}
            sx={{ opacity: 0.8 }}
        />

        <Typography variant="h6" sx={{ opacity: 0.6 }}>
            {name}
        </Typography>

        <Checkbox sx={{ visibility: "hidden" }} />
    </Stack>
);

const StateSection = ({ state, temperature }) => {
    const stateText = state ? "가동" : "중지";
    const stateColor = state ? "#b12020" : "primary";

    return (
        <Stack direction={"row"} width={"100%"} bgcolor={"#d7d7d7"}>
            <Stack
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"12px"}
            >
                <Typography fontWeight={500} color={stateColor}>
                    {stateText}
                </Typography>
            </Stack>

            <Divider
                direction={"vertical"}
                sx={{
                    width: "1px",
                    my: "6px",
                    bgcolor: "#fff",
                    opacity: 0.7,
                }}
            />

            <Stack
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"8px"}
            >
                <Typography
                    fontWeight={500}
                    color={mobileColor.third}
                >{`${temperature}°C`}</Typography>
            </Stack>
        </Stack>
    );
};
