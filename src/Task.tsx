import React, { FC } from 'react'
import { IconButton } from '@mui/material';

interface Props {
    id: number,
    task: string,
    onDelete: any
}

const Task: FC<Props> = ({ id, task, onDelete }) => {

    return (
        <>
            <IconButton aria-label="delete" color="primary" size="small"
               onClick={() => onDelete(id)}
            >
                X
            </IconButton>

            &nbsp; {task}
        </>
    )
}

export default Task

