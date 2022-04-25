import React, { FC, useEffect } from 'react'
import Task from './Task'
import { Typography, List, ListItem } from '@mui/material';

export type Todo = {
    id: number
    task: string
}

interface Props {
    todoList: Todo[],
    onDelete: any,
}

const TodosList: FC<Props> = ({ todoList, onDelete }) => {
    useEffect(() => {
        console.log('Rendering <List />')
    })

    return (
        <>
            <List>
                <Typography variant="h6" gutterBottom component="div">
                    My Todos
                </Typography>

                {
                    todoList?.map((el) => (
                        <ListItem key={el.id}>
                            <Task id={el.id} task={el.task} onDelete={onDelete}
                            />
                        </ListItem>
                    ))
               }
            </List>
        </>
    )
}

export default TodosList
// use memo with extra large lists
// export default memo(TodosList)
