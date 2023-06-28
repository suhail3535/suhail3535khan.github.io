import React from "react";
import style from "./Ani.module.css";
const Anima = () => {
    return (
        <div>
            <div className={`${style.waveWrapper} ${style.waveAnimation}`}>
                <div className={`${style.waveWrapperInner} ${style.bgTop}`}>
                    <div

                        className={`${style.wave} ${style.waveTop}`}

                        style={{
                            backgroundImage:
                                "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
                        }}></div>
                </div>
                <div
                    className={`${style.waveWrapperInner} ${style.bgMiddle}`}

                >
                    <div
                        className={`${style.wave} ${style.waveMiddle}`}


                        style={{
                            backgroundImage:
                                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
                        }}></div>
                </div>
                <div
                    className={`${style.waveWrapperInner} ${style.bgBottom}`}

                >
                    <div
                        className={`${style.wave} ${style.waveBottom}`}

                    
                        style={{
                            backgroundImage:
                                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
                        }}></div>
                </div>
            </div>
        </div>
    );
};

export default Anima;
