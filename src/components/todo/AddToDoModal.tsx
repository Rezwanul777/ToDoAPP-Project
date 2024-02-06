/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription,  DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useDispatch } from "react-redux";
import { addToDo } from "@/redux/features/todoSlice";


const AddToDoModal = () => {
  const [task,setTask]=useState('')
  const[description,setDescription]=useState('')  
  const dispatch=useDispatch()
  const onSubmit=(e:FormEvent)=>{
    e.preventDefault()

    const taskDetails={
      title:task,
      description:description,
    }
    dispatch(addToDo(taskDetails));
    
  }
  
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Button className=" bg-primary-gradient font-semibold text-2xl">Add TO DO</Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your Task taht you want to finish.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input onBlur={(e)=>setTask(e.target.value)} id="task"  className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
               Description
              </Label>
              <Input onBlur={(e)=>setDescription(e.target.value)}  id="description"  className="col-span-3" />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
            <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
          </form>
        </DialogContent>
    
      </Dialog>
    );
};

export default AddToDoModal;