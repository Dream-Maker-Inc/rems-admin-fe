import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

export const BackgroundLineCanvas = ({ topBoxesRef, secondRowBoxesRef }) => {
    const canvas = useRef();
    let ctx = null;

    const lineStyle = { color: "#33363b", width: 5 };

    useEffect(() => {
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;

        // eslint-disable-next-line react-hooks/exhaustive-deps
        ctx = canvasEle.getContext("2d");
    }, []);

    useEffect(() => {
        const topBoxes = topBoxesRef.map((it) => calculatePosition(it));
        const secondRowBoxes = secondRowBoxesRef.map((it) =>
            calculatePosition(it)
        );
        const secondRowBoxesLastIndex = secondRowBoxes.length - 1;

        topBoxes.forEach((it) =>
            drawLine(
                {
                    x: it.xCenter,
                    y: it.yEnd,
                    x1: it.xCenter,
                    y1: it.yEnd + 20,
                },
                lineStyle
            )
        );

        secondRowBoxes.forEach((it, index) =>
            drawLine(
                {
                    x: it.xCenter,
                    y: 282,
                    x1: it.xCenter,
                    y1: index !== secondRowBoxesLastIndex ? 480 : 320,
                },
                lineStyle
            )
        );

        drawLine(
            {
                x: secondRowBoxes[0].xCenter,
                y: topBoxes[0].yEnd + 20,
                x1: secondRowBoxes[3].xCenter,
                y1: topBoxes[0].yEnd + 20,
            },
            lineStyle
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const calculatePosition = (ref) => {
        const current = ref.current;

        const xStart = current.offsetLeft;
        const xEnd = current.offsetLeft + current.offsetWidth;
        const yStart = current.offsetTop;
        const yEnd = current.offsetTop + current.offsetHeight;

        const xCenter = current.offsetLeft + current.offsetWidth / 2;
        const yCenter = current.offsetTop + current.offsetHeight / 2;

        return {
            xStart,
            xEnd,
            yStart,
            yEnd,
            xCenter,
            yCenter,
        };
    };

    const drawLine = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = "black", width = 1 } = style;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    };

    return <StyledCanvas ref={canvas} />;
};
const StyledCanvas = styled("canvas")`
    position: absolute;
    width: 100%;
    height: 100%;
`;
