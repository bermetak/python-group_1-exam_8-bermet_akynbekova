import React from 'react';
import Card from "../UI/Card/Card";

const TaskCard = props => {
    const {task} = props;
    const {summary, description, due_date, status, time_planned, id} = task;
    const link = '/tasks/' + id;
    console.log(link);

    return <Card

        name={summary}
        status={status}
        description={description}
        date={due_date}
        time={time_planned}
        link={link}
        className='h-100'/>;
};


export default TaskCard;