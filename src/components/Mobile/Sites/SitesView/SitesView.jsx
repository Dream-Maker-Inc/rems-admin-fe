import { Stack } from "@mui/material";
import { SitesFilter } from "../SitesFilter";
import { SitesList } from "../SitesList";

export const SitesView = () => {
    return (
        <Stack width={"100%"} height={"100%"}>
            <SitesFilter />
            <SitesList />
        </Stack>
    );
};
