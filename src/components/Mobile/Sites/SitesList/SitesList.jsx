import { Stack } from "@mui/material";
import { SitesListItem } from "../SitesListItem";

export const SitesList = () => {
    const models = [
        {
            id: 1,
            title: "편백 경로당 1",
            address: "서울",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "편백 경로당 2",
            address: "서울",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "편백 경로당 3",
            address: "서울",
            createdAt: "2021.01.01",
        },
        {
            id: 4,
            title: "편백 경로당 4",
            address: "서울",
            createdAt: "2021.01.01",
        },
    ];

    const handleItemClick = (id) => alert(`clicked ${id}`);

    return (
        <Stack width={"100%"} height={"100%"} overflow={"auto"}>
            {models.map(({ id, ...model }) => (
                <SitesListItem
                    key={id}
                    model={model}
                    onClick={() => handleItemClick(id)}
                />
            ))}
        </Stack>
    );
};
