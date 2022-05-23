const leftModels = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    assigned: true, // left true
    siteName: `편백경로당 ${index + 1}`,
    address: "서울시 노원구",
    createdAt: "2021-09-30",
}));

const rightModels = Array.from({ length: 10 }, (_, index) => ({
    id: 10 + (index + 1),
    assigned: false, // left false
    siteName: `편백경로당 ${10 + (index + 1)}`,
    address: "서울시 노원구",
    createdAt: "2021-09-30",
}));

export const transferListModel = [...leftModels, ...rightModels];
