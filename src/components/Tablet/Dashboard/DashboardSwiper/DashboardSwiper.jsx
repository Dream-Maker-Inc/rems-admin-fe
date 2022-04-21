import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "@emotion/styled";
import {
    ArrowBackIosRounded,
    ArrowForwardIosRounded,
} from "@mui/icons-material";
import { css } from "@emotion/react";

export const DashboardSwiper = ({ children }) => {
    const [swiper, setSwiper] = useState();
    const slidePrev = () => swiper?.slidePrev();
    const slideNext = () => swiper?.slideNext();

    const [disableSlidePrevButton, setDisableSlidePrevButton] = useState(false);
    const [disableSlideNextButton, setDisableSlideNextButton] = useState(false);

    const updateSlideControlButtonState = (swiper) => {
        setDisableSlidePrevButton(swiper?.isBeginning);
        setDisableSlideNextButton(swiper?.isEnd);
    };

    const handleSwiperInit = (swiper) => {
        setSwiper(swiper);
        setDisableSlidePrevButton(swiper?.isBeginning);
    };

    return (
        <Stack position={"relative"} width={"100%"} height={"100%"}>
            <Swiper
                style={{ width: "100%", height: "100%" }}
                centeredSlides={true}
                slidesPerView={1.3}
                spaceBetween={100}
                onSwiper={handleSwiperInit}
                onSlideChange={updateSlideControlButtonState}
            >
                {children.map((it, index) => (
                    <SwiperSlide key={index}>{it}</SwiperSlide>
                ))}
            </Swiper>

            <SwipePrevButton
                disabled={disableSlidePrevButton}
                onClick={slidePrev}
            >
                <ArrowBackIosRounded />
            </SwipePrevButton>

            <SwipeNextButton
                disabled={disableSlideNextButton}
                onClick={slideNext}
            >
                <ArrowForwardIosRounded />
            </SwipeNextButton>
        </Stack>
    );
};

const swiperControlButtonStyle = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;

    width: 80px;
    height: 80px;
    color: #fff;

    svg {
        width: 80px;
        height: 80px;
    }
`;

const SwipePrevButton = styled(IconButton)`
    ${swiperControlButtonStyle}
    left: 4.5%;
`;

const SwipeNextButton = styled(IconButton)`
    ${swiperControlButtonStyle}
    right: 4.5%;
`;
