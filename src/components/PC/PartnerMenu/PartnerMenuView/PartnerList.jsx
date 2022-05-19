import { Button, Stack, Typography } from "@mui/material";

export const PartnerList = ({ partners, partnerIndex, handlePartnerClick }) => {
    const isPartnerIndex = (index) => index === partnerIndex;

    return (
        <Stack minWidth={"160px"} bgcolor={"#3a3f43"} borderRadius={"4px"}>
            <Stack
                height={"36px"}
                justifyContent={"center"}
                px={"16px"}
                borderBottom={"1px solid #505050"}
            >
                <Typography>협력사 목록</Typography>
            </Stack>

            <Stack p={"16px 16px"}>
                {partners.map((it, index) => (
                    <Stack
                        color={isPartnerIndex(index) ? "primary.main" : "#fff"}
                    >
                        <Button
                            color={"inherit"}
                            sx={{
                                justifyContent: "flex-start",
                                fontWeight: !isPartnerIndex(index) && 300,
                            }}
                            onClick={() => handlePartnerClick(index)}
                        >
                            {`- ${it}`}
                        </Button>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};
