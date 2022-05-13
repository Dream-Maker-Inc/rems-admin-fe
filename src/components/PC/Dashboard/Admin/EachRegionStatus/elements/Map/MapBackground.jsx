import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { Background } from "./Map";
import { mapAreaTypes } from "./MapArea.types";

// partial
export const MapBackground = ({ models }) => {
    const areaTypes = mapAreaTypes;
    const {
        seoul,
        gyeongGi,
        chungNam,
        jeolLaBukDo,
        jeolLaNamDo,
        gangwon,
        chungBuk,
        gyeongBuk,
        gyeongNam,
        jeju,
    } = models.reduce((acc, curr, index) => {
        return { ...acc, [areaTypes[index]]: { ...curr } };
    }, {});

    return (
        <Stack position={"relative"}>
            <Background
                src={`${process.env.PUBLIC_URL}/assets/images/bg_dashboard_map.png`}
                alt="dashboard-map"
            />

            <>
                <div>
                    <AreaPiece
                        color={seoul.color}
                        area-label={seoul.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/seoul.png`}
                        width={"46px"}
                        height={"36px"}
                        top={"26.8%"}
                        left={"37%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/seoul-info.png`}
                        width={"317px"}
                        height={"185px"}
                        top={"3.3%"}
                        left={"2.3%"}
                    />
                </div>

                <div>
                    <AreaPiece
                        color={gyeongGi.color}
                        area-label={gyeongGi.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/gyeonggi.png`}
                        width={"204px"}
                        height={"164px"}
                        top={"17.2%"}
                        left={"25.7%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/gyeonggi-info.png`}
                        width={"357px"}
                        height={"105px"}
                        top={"21.8%"}
                        left={"2.3%"}
                    />
                </div>

                <div>
                    <AreaPiece
                        color={chungNam.color}
                        area-label={chungNam.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/chung-nam.png`}
                        width={"169px"}
                        height={"130px"}
                        top={"37.92%"}
                        left={"27.9%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/chung-nam-info.png`}
                        width={"301px"}
                        height={"105px"}
                        top={"39.75%"}
                        left={"2.3%"}
                    />
                </div>

                <div>
                    <AreaPiece
                        color={jeolLaBukDo.color}
                        area-label={jeolLaBukDo.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/jeollabuk-do.png`}
                        width={"168px"}
                        height={"108px"}
                        top={"53.1%"}
                        left={"31.45%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/jeollabuk-do-info.png`}
                        width={"330px"}
                        height={"116px"}
                        top={"57.3%"}
                        left={"2.3%"}
                    />
                </div>

                <div>
                    <AreaPiece
                        color={jeolLaNamDo.color}
                        area-label={jeolLaNamDo.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/jeollanam-do.png`}
                        width={"229px"}
                        height={"158px"}
                        top={"65.6%;"}
                        left={"23.4%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/jeollanam-do-info.png`}
                        width={"309px"}
                        height={"124px"}
                        top={"74.6%"}
                        left={"2.3%"}
                    />
                </div>
            </>

            <>
                <div>
                    <AreaPiece
                        color={gangwon.color}
                        area-label={gangwon.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/gangwon-do.png`}
                        width={"240px"}
                        height={"177px"}
                        top={"12.4%"}
                        right={"27.8%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/gangwon-do-info.png`}
                        width={"354px"}
                        height={"165px"}
                        top={"3.3%"}
                        right={"2.2%"}
                    />
                </div>
                <div>
                    <AreaPiece
                        color={chungBuk.color}
                        area-label={chungBuk.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/chung-buk.png`}
                        width={"143px"}
                        height={"146px"}
                        top={"34.8%"}
                        right={"38%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/chung-buk-info.png`}
                        width={"400px"}
                        height={"173px"}
                        top={"21.9%"}
                        right={"2.2%"}
                    />
                </div>
                <div>
                    <AreaPiece
                        color={gyeongBuk.color}
                        area-label={gyeongBuk.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/gyeong-buk.png`}
                        width={"196px"}
                        height={"194px"}
                        top={"36.03%"}
                        right={"23.9%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/gyeong-buk-info.png`}
                        width={"307px"}
                        height={"105px"}
                        top={"40.4%"}
                        right={"2.2%"}
                    />
                </div>
                <div>
                    <AreaPiece
                        color={gyeongNam.color}
                        area-label={gyeongNam.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/gyeong-nam.png`}
                        width={"211px"}
                        height={"143px"}
                        top={"58.5%"}
                        right={"25.4%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/gyeong-nam-info.png`}
                        width={"340px"}
                        height={"105px"}
                        top={"58.9%"}
                        right={"2.2%"}
                    />
                </div>
                <div>
                    <AreaPiece
                        color={jeju.color}
                        area-label={jeju.label}
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/jeju.png`}
                        width={"94px"}
                        height={"48px"}
                        top={"81.4%"}
                        right={"29.2%"}
                    />
                    <AreaInfoBox
                        src={`${process.env.PUBLIC_URL}/assets/images/maps/jeju-info.png`}
                        width={"281px"}
                        height={"105px"}
                        top={"77.4%"}
                        right={"2.2%"}
                    />
                </div>
            </>
        </Stack>
    );
};
const AreaPiece = styled("div")`
    position: absolute;
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};

    width: ${({ width }) => width};
    height: ${({ height }) => height};

    mask: url(${({ src }) => src});
    mask-repeat: no-repeat;

    background: ${({ color }) => color};
    opacity: 0.6;
    z-index: 1;
`;
const AreaInfoBox = styled("img")`
    position: absolute;
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};

    z-index: 2;
`;
