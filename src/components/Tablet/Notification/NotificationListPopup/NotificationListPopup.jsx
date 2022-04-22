import { useState } from "react";
import { ListPopupTemplate } from "../../common/ListPopupTemplate/ListPopupTemplate";

export const NotificationListPopup = () => {
    // popup open/close
    const [open, setOpen] = useState(true);
    const closePopup = () => setOpen(false);

    const notifications = [
        {
            id: 1,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 1,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 1,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 1,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "거실1/전열/교환기/에러발생",
            createdAt: "2021.01.01",
        },
    ];
    const handleItemShow = (id) => alert(id);

    return (
        <ListPopupTemplate
            open={open}
            onClose={closePopup}
            title={"알람"}
            items={notifications}
            handleItemShow={handleItemShow}
        />
    );
};
