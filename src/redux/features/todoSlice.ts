import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TToDo={
    title:string,
    description:string,
    isCompleted?:boolean,
}

type TInitialState={
    todos:TToDo[]
}

const initialState:TInitialState = {
    todos:[]
}

const todoSlice=createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addToDo:(state,action: PayloadAction<TToDo>)=>{
           state.todos.push({...action.payload,isCompleted:false})
        }
    }
})

export const {addToDo}=todoSlice.actions

export default todoSlice.reducer;