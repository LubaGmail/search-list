import React, { FC } from 'react'
import DeleteForeverIcon from '@mui/icons-material/Delete';

interface Props {
    id: number,
    task: string,
    onDelete: any
}

const Task: FC<Props> = ({ id, task, onDelete }) => {

    return (
        <>
            <DeleteForeverIcon
                 onClick={() => onDelete(id)}
            />

            &nbsp; {task}
        </>
    )
}

export default Task

