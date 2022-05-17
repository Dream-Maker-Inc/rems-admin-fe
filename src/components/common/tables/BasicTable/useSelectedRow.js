import { useState } from "react";

// 테이블 Row 클릭 시, 해당 Row Id 값 기억하기
export const useSelectedRow = () => {
    const [selectedRowId, setSelectedRowId] = useState(0);
    const handleSelectedRowId = (id) => setSelectedRowId(id);
    const isSelectedRow = (id) => id === selectedRowId;

    return {
        isSelectedRow,
        handleSelectedRowId,
    };
};
