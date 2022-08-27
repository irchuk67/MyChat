import React from "react";
import './Message.scss';

const transformDateTime = (dateTime) => {
    console.log(dateTime)
    const [dateValues, timeValues] = dateTime.split(' ');
    const [month, day, year] = dateValues.split('/');
    const [hours, minutes, seconds] = timeValues.split(':');

    const date = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        day:    'numeric',
        month:  'numeric',
        year:   'numeric',
        hour:   '2-digit',
        minute: '2-digit',
    });
    return longEnUSFormatter.format(date)
}

const Message = ({message, companion}) => {
    console.log(message)
    const dateTime = transformDateTime(message.sendDatetime);
    return(
        <div className={`message`}>
            {!message.isMyMessage ? <img src={companion} className={'img'} alt={'Companion Image'}/> : null}
            <div className="message__content">
                <div className={'message__notification'}>
                    <p className="message__text">
                        {message.text}
                    </p>
                </div>
                <p className={'message__date'}>
                    {dateTime}
                </p>
            </div>
        </div>
    )
};

export default Message;