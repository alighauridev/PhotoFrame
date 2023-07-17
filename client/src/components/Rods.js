import React from 'react'

const Rods = ({ rotatedImages, rod }) => {
    return (
        <>
            {/* Top rod */}
            <div
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0",
                    backgroundImage: `url(${rod.image})`,
                    backgroundSize: "contain",
                    height: "30px",
                    width: "100%",
                    backgroundRepeat: "repeat",
                }}
            >

            </div>

            {/* Bottom rod */}
            <div
                style={{
                    position: "absolute",
                    bottom: "0px",
                    left: "0",
                    backgroundImage: `url(${rod.image})`,
                    backgroundSize: "contain",
                    height: "30px",
                    width: "100%",
                    backgroundRepeat: "repeat",

                    transform: 'rotateX(180deg)'
                }}
            ></div>

            {/* Left rod */}
            <div
                style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "0px",
                    backgroundImage: `url(${rotatedImages.angle270})`,
                    backgroundSize: "contain",
                    height: "calc(100% - 60px)",
                    width: "30px",
                    backgroundRepeat: "round",
                }}
            ></div>

            {/* Right rod */}
            <div
                style={{
                    position: "absolute",
                    bottom: "30px",
                    right: "0px",
                    backgroundImage: `url(${rotatedImages.angle90})`,
                    backgroundSize: "contain",
                    height: "calc(100% - 60px)",
                    width: "30px",
                    backgroundRepeat: "round",
                }}
            ></div>

        </>
    )
}

export default Rods
