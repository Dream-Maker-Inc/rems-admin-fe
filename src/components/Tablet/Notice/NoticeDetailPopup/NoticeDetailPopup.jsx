import { useState } from "react";
import { DetailPopupTemplate } from "../../common/DetailPopupTemplate/DetailPopupTemplate";

export const NoticeDetailPopup = () => {
    // popup open/close
    const [open, setOpen] = useState(true);
    const closePopup = () => setOpen(false);

    const model = {
        firstRow: {
            label: "제목",
            value: "전체 공지입니다",
        },
        secondRow: {
            first: {
                label: "작성자",
                value: "SYSTEMADMIN",
            },
            second: {
                label: "작성일시",
                value: "2021.01.01 09:00:00",
            },
        },
        textarea: {
            label: "공지 내용",
            value: (
                <>
                    <span>
                        오늘 오전에 설비 알람이 발생되었지만 이용하는 데 문제가
                        없습니다.
                    </span>
                    <span>정상적으로 이용 가능합니다.</span>
                </>
            ),
        },
    };

    return (
        <DetailPopupTemplate
            open={open}
            onClose={closePopup}
            title={"공지 상세"}
            model={model}
        />
    );
};
