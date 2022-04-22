import { useState } from "react";
import { ListPopupTemplate } from "../../common/ListPopupTemplate/ListPopupTemplate";

export const NoticeListPopup = () => {
    // popup open/close
    const [open, setOpen] = useState(true);
    const closePopup = () => setOpen(false);

    const notice = [
        {
            id: 1,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 1,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 1,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 1,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 2,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
        {
            id: 3,
            title: "[전체] 신정 공지",
            createdAt: "2021.01.01",
        },
    ];
    const handleItemShow = (id) => alert(id);

    return (
        <ListPopupTemplate
            open={open}
            onClose={closePopup}
            title={"공지"}
            items={notice}
            handleItemShow={handleItemShow}
        />
    );
};
