import { useState } from "react";
import { DetailPopupTemplate } from "../../common/DetailPopupTemplate/DetailPopupTemplate";

export const NotificationDetailPopup = () => {
    // popup open/close
    const [open, setOpen] = useState(true);
    const closePopup = () => setOpen(false);

    const model = {
        firstRow: {
            label: "설비",
            value: "[에어컨] 거실1",
        },
        secondRow: {
            first: {
                label: "위치",
                value: "거실1",
            },
            second: {
                label: "알람일시",
                value: "2021.01.01 09:00:00",
            },
        },
        textarea: {
            label: "알람 내용",
            value: "가동 에러",
        },
    };

    return (
        <DetailPopupTemplate
            open={open}
            onClose={closePopup}
            title={"알람 상세"}
            model={model}
        />
    );
};
