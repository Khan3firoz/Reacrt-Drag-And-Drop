import React, { useState } from 'react';
import Draggable from 'react-draggable';

import appleRed from '../../appleRed.png'


const DragImgBox = (props) => {
    const [click, setClick] = useState('click', 0);
    const [val, setVal] = useState('val', {})
    const [clas, setClas] = useState(null);
    const [secondClas, setSecondClas] = useState(null);
    const [Img, setImg] = useState(appleRed);

    const elementPosition = (el) => {
        if (!el) return;
        const pos = { x: el.getBoundingClientRect().x, y: el.getBoundingClientRect().y };
        val[el.className] = pos;
        setVal(val);
    }



    const handleClick = (e) => {
        if (click === 0) {
            setClick(click + 1);
            setClas(e.target.className);
            console.log(click, clas, secondClas, 'first')
        }
        if (click === 1) {
            setClick(click + 1);
            setSecondClas(e.target.className);
            console.log(click, clas, secondClas, 'second')
        }
        if (click === 2) {
            setClick(1);
            setClas(e.target.className);
            console.log(click, clas, secondClas, 'third')
        }
    }


    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    return (<>

        <Draggable
            defaultPosition={props.defaultPosition}
            onStop={props.drag}
            onDrag={props.del}
        >

            <div className="drag-box" style={{ position: 'absolute' }}>

                {props.top ? (<span
                    className={props.properClass + "-top-dot"}
                    style={{
                        position: 'absolute',
                        left: '58px',
                        top: '-9px',
                        height: '8px',
                        width: '10px',
                        backgroundColor: 'black'
                    }}
                    onClick={(e) => handleClick(e)}
                    // onStop={el => elementPosition(el)}
                    ref={(el) => elementPosition(el)}
                >

                </span>) : null}

                {props.right ? (<span
                    className={props.properClass + "-right-dot"}
                    style={{
                        position: 'absolute',
                        right: '-9px', height: '10px',
                        width: '8px',
                        backgroundColor: 'black', top: '15px'
                    }}
                    onClick={(e) => handleClick(e)}
                    // onStop={el => elementPosition(el)}
                    ref={el => elementPosition(el)}
                >
                </span>) : null}

                {props.bottom ? (<span
                    className={props.properClass + "-bottom-dot"}
                    style={{
                        position: 'absolute',
                        left: '58px', bottom: '-5px',
                        height: '8px', width: '10px', backgroundColor: 'black'
                    }}
                    onClick={(e) => handleClick(e)}
                    // onStop={el => elementPosition(el)}
                    ref={el => elementPosition(el)}
                >
                </span>) : null}

                <div className="container">
                    <div className="img-holder">
                        <img src={Img} alt="" id="img" className="img" style={{ height: "20vh", width: "15vw" }} />
                    </div>

                </div>
            </div>
        </Draggable>
    </>
    );
}

export default DragImgBox;
