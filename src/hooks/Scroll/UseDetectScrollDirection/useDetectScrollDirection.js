import { useState } from "react";

export const useDetectScrollDirection = () => {
    const [lastScroll, setLastScroll] = useState(0);

    // 상단 방향으로 스크롤 하고 있는지 여부
    const [isDirectionTop, setIsDirectionTop] = useState(false);

    // 상단 방향으로 스크롤 가능 여부
    const isPossibleScrollTop = lastScroll !== 0;

    const handleScrollChange = (e) => {
        const isScrollUp = lastScroll > parseInt(e.target.scrollTop);

        setLastScroll(e.target.scrollTop);
        setIsDirectionTop(isScrollUp);
    };

    return {
        isPossibleScrollTop,
        isDirectionTop,
        handleScrollChange,
    };
};
