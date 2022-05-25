import { Stack } from "@mui/material";
import { LabelWithCircle } from "../../../../../common/LabelWithCircle";

export const TitleWithContent = ({ title, children }) => {
    return (
        <Stack width={"100%"} spacing={"8px"}>
            <LabelWithCircle title={title} />

            <Stack
                width={"100%"}
                padding={"24px"}
                bgcolor={"#4e5359"}
                borderRadius={"4px"}
            >
                {children}
            </Stack>
        </Stack>
    );
};
