const IconPath = `${process.env.PUBLIC_URL}/assets/icons`;

export const MenusModel = [
    {
        id: "dashboard",
        title: "대시보드",
        icon: `${IconPath}/ic_dashboard.png`,
    },
    {
        id: "system-management",
        title: "시스템 관리",
        icon: `${IconPath}/ic_setting.png`,
        children: [
            {
                id: "code-management",
                title: "코드 관리",
                children: [
                    { id: "system-management1", title: "시스템 관리1" },
                    { id: "system-management2", title: "시스템 관리2" },
                    { id: "system-management3", title: "시스템 관리3" },
                ],
            },
            {
                id: "app-management",
                title: "어플리케이션 관리",
            },
        ],
    },
    {
        id: "operation-base-info",
        title: "운영 기초 정보 관리",
        icon: `${IconPath}/ic_operation_base_info.png`,
        children: [
            {
                id: "test1",
                title: "test1",
            },
        ],
    },
    {
        id: "operation-info",
        title: "운영 정보 관리",
        icon: `${IconPath}/ic_operation_info.png`,
        children: [
            {
                id: "test2",
                title: "test2",
            },
        ],
    },
    {
        id: "statistics",
        title: "통계",
        icon: `${IconPath}/ic_statistics.png`,
        children: [
            {
                id: "test3",
                title: "test3",
            },
        ],
    },
    {
        id: "operational-status",
        title: "운영현황",
        icon: `${IconPath}/ic_operation_status.png`,
        children: [
            {
                id: "test4",
                title: "test4",
            },
        ],
    },
    {
        id: "ZEB-management",
        title: "ZEB관리",
        icon: `${IconPath}/ic_ZEB_management.png`,
        children: [
            {
                id: "test5",
                title: "test5",
            },
        ],
    },
];
