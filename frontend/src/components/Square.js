import React from 'react';
import { Button } from 'antd';

const styleSheet = {
    width: "100%",
    height: "100%",
    border: "0.1vw solid",
    borderRadius: "0",
    padding: "5vh 2vw",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "2.5em"
};

const Square = (props) => {
    return (
        <Button type="primary"
            onClick={props.onClick}
            style={styleSheet}
        >
            {props.value}
        </Button>
    );
}

export default Square;