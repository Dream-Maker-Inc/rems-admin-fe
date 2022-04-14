import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab/ScrollContainerWithTopFab";
import { SitesListItem } from "../SitesListItem";

export const SitesList = () => {
    const models = generateMockSites();

    const handleItemClick = (id) => alert(`clicked ${id}`);

    return (
        <ScrollContainerWithTopFab>
            {models.map(({ id, ...model }) => (
                <SitesListItem
                    key={id}
                    model={model}
                    onClick={() => handleItemClick(id)}
                />
            ))}
        </ScrollContainerWithTopFab>
    );
};

// 가짜 데이터 목록 생성
const generateMockSites = () =>
    Array.from({ length: 10 }, (_, index) => ({
        id: index,
        title: `편백 경로당 ${index}`,
        address: "서울",
        createdAt: "2021.01.01",
    }));
