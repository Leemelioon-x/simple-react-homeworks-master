import React from 'react'
import classes from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessagePropsType) {

    return (
        <div className={classes.message_container}>
            <div className={classes.photo_box}>
                <img className={classes.photo} src={props.avatar} alt={props.name}/>
            </div>

            <div className={classes.message_box}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.message}>
                    {props.message}
                </div>
                <div className={classes.time}>
                    {props.time}
                </div>

            </div>

        </div>
    )
}

export default Message
