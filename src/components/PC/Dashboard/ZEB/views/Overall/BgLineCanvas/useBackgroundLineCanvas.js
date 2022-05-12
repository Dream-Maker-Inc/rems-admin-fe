import { useRef } from "react";

export const useBackGroundLineCanvas = () => {
    const topLeftBoxRef = useRef();
    const topRightBoxRef = useRef();
    const topBoxesRef = [topLeftBoxRef, topRightBoxRef];

    const getTopBoxRef = (index) => {
        switch (index) {
            case 0:
                return topLeftBoxRef;
            case 1:
                return topRightBoxRef;
            default:
                return;
        }
    };

    const secondRowBox1Ref = useRef();
    const secondRowBox2Ref = useRef();
    const secondRowBox3Ref = useRef();
    const secondRowBox4Ref = useRef();
    const secondRowBoxesRef = [
        secondRowBox1Ref,
        secondRowBox2Ref,
        secondRowBox3Ref,
        secondRowBox4Ref,
    ];

    const getSecondRowBoxRef = (index) => {
        switch (index) {
            case 0:
                return secondRowBox1Ref;
            case 1:
                return secondRowBox2Ref;
            case 2:
                return secondRowBox3Ref;
            case 3:
                return secondRowBox4Ref;
            default:
                return;
        }
    };

    return {
        topBoxesRef,
        getTopBoxRef,
        secondRowBoxesRef,
        getSecondRowBoxRef,
    };
};
