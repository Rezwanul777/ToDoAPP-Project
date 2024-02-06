import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TToDo={
    id:string
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
        },

        removeToDo:(state,action:PayloadAction<string>)=>{
           state.todos= state.todos.filter((item)=>item.id !== action.payload) // set todos in array
    }
}
})

export const {addToDo,removeToDo}=todoSlice.actions

export default todoSlice.reducer;