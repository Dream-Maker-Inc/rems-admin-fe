import { Stack } from "@mui/material";
import { GearListTable } from "./elements/GearListTable";
import { GearSearch } from "./elements/GearSearch";
import { TableWithLineChart } from "./elements/TableWithLineChart";
import { TitleWithContent } from "./elements/TitleWithContent";

export const GearDetail = () => {
    return (
        <Stack width={"100%"} spacing={"36px"} padding={"20px"}>
            <TitleWithContent title={"설비 목록"}>
                <GearListTable />
            </TitleWithContent>

            <TitleWithContent title={"설비 데이터 상세"}>
                <GearSearch />
                <TableWithLineChart />
            </TitleWithContent>
        </Stack>
    );
};
