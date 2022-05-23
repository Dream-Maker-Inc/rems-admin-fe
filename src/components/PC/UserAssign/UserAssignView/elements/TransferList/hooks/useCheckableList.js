import { useEffect, useMemo, useState } from "react";

export const useCheckableList = (models) => {
    const [states, setStates] = useState([]);

    useEffect(() => {
        setStates(models.map(({ id }) => ({ id, checked: false })));
    }, [models]);

    const findCheckedById = (id) =>
        states.find((it) => it.id === id)?.checked ?? false;
    const handleCheckedChange = (id, checked) => {
        const targetIndex = states.findIndex((it) => it.id === id);
        states[targetIndex].checked = checked;

        setStates([...states]);
    };

    // 전체 체크 여부
    const isCheckedAll = useMemo(
        () => (!!states[0] ? states.every((it) => it.checked) : false),
        [states]
    );
    const handleCheckAllClick = () =>
        setStates([...states.map((it) => ({ ...it, checked: !isCheckedAll }))]);

    return {
        states,
        findCheckedById,
        handleCheckedChange,
        isCheckedAll,
        handleCheckAllClick,
    };
};
