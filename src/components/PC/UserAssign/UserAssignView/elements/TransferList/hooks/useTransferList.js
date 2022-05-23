import { useMemo, useState } from "react";
import { useCheckableList } from "./useCheckableList";

export const useTransferList = (models) => {
    const [stateModels, setStateModels] = useState(models);

    // 할당된(assigned) 아이템들은 Left로 분류
    const leftData = useMemo(
        () =>
            stateModels
                .filter((it) => it.assigned)
                .map(({ assigned, ...rest }) => ({ ...rest })),
        [stateModels]
    );

    // 할당되지 않은(!assigned) 아이템들은 Right로 분류
    const rightData = useMemo(
        () =>
            stateModels
                .filter((it) => !it.assigned)
                .map(({ assigned, ...rest }) => ({ ...rest })),
        [stateModels]
    );

    const leftStateModels = useCheckableList(leftData);
    const { states: leftStates } = leftStateModels;

    const rightStateModels = useCheckableList(rightData);
    const { states: rightStates } = rightStateModels;

    // left item to right
    const handleTransferRight = () => {
        const targetIds = leftStates
            .filter(({ checked }) => checked)
            .map(({ id }) => id);

        if (!targetIds[0]) return;

        const isTargetId = (id) => targetIds.some((it) => it === id);

        setStateModels((old) =>
            old.map((it) =>
                isTargetId(it.id) ? { ...it, assigned: false } : it
            )
        );
    };

    // right item to left
    const handleTransferLeft = () => {
        const targetIds = rightStates
            .filter(({ checked }) => checked)
            .map(({ id }) => id);

        if (!targetIds[0]) return;

        const isTargetId = (id) => targetIds.some((it) => it === id);

        setStateModels((old) =>
            old.map((it) =>
                isTargetId(it.id) ? { ...it, assigned: true } : it
            )
        );
    };

    return {
        leftData,
        leftStateModels,
        rightData,
        rightStateModels,
        handleTransferRight,
        handleTransferLeft,
    };
};
