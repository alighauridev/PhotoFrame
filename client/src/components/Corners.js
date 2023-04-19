import React from 'react'

const Corners = ({ corner }) => {
    return (
        <>
            {/* Top-left corner */}
            <div
                className="rod-corner top-left-corner"
                style={{
                    backgroundImage: `url(${corner})`,

                    clipPath: "polygon(0 0, 30px 0, 0 30px)",
                    transform: "rotate(270deg)",
                }}
            >

            </div>
            <div
                className="rod-corner top-left-corner"
                style={{
                    backgroundImage: `url(${corner})`,

                    clipPath: 'polygon(0px 0px, 30px 0px, 0px 30px)',
                    transform: 'rotateX(180deg) rotate(180deg)'
                }}
            >
                <span className="first"></span>
                <span className="bottom"></span>
            </div>
            {/* Top-right corner */}
            <div
                className="rod-corner top-right-corner"
                style={{
                    backgroundImage: `url(${corner})`,
                    clipPath: "polygon(0px 0px, 30px 0px, 0px 30px)",
                    transform: "rotateX(180deg) rotate(90deg)",
                }}
            >
                <span className="first"></span>
                <span className="bottom"></span>
            </div>
            <div
                className="rod-corner top-right-corner"
                style={{
                    backgroundImage: `url(${corner})`,

                    clipPath: 'polygon(0px 0px, 30px 0px, 0px 30px)',
                    transform: 'rotate(360deg)'
                }}
            >
                <span className="first"></span>
                <span className="bottom"></span>
            </div>

            {/* Bottom-left corner */}
            <div
                className="rod-corner bottom-left-corner"
                style={{
                    backgroundImage: `url(${corner})`,


                    clipPath: 'polygon(0px 0px, 30px 0px, 0px 30px)',
                    transform: 'rotate(180deg)'
                }}
            >
                <span className="first"></span>
                <span className="bottom"></span>
            </div>
            <div
                className="rod-corner bottom-left-corner"
                style={{
                    backgroundImage: `url(${corner})`,

                    clipPath: "polygon(0px 0px, 30px 0px, 0px 30px)",
                    transform: "rotateX(180deg) rotate(270deg)",
                }}
            >
                <span className="first"></span>
                <span className="bottom"></span>
            </div>
            {/* Bottom-right corner */}
            <div
                className="rod-corner bottom-right-corner"
                style={{
                    backgroundImage: `url(${corner})`,
                    clipPath: "polygon(0px 0px, 30px 0px, 0px 30px)",
                    transform: "rotate(90deg)",
                }}
            >
                <span className="first"></span>
                <span className="bottom"></span>
            </div>
            <div
                className="rod-corner bottom-right-corner"
                style={{
                    backgroundImage: `url(${corner})`,

                    clipPath: 'polygon(0px 0px, 30px 0px, 0px 30px)',
                    transform: 'rotateX(180deg) rotate(360deg)'
                }}
            >
                <span className="first"></span>
                <span className="bottom"></span>
            </div>

        </>
    )
}

export default Corners
