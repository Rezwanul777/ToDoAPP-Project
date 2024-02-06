
import AddToDoModal from "./AddToDoModal";
import ToDoCard from "./ToDoCard";
import ToDoFilter from "./ToDoFilter";



const ToDoContainer = () => {
    return (
        <div >
            <div className="flex justify-between mb-2">
                <AddToDoModal/>
                <ToDoFilter/>
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-md p-[5px]">
                <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
                    <ToDoCard/>
                    <ToDoCard/>
                    <ToDoCard/>
                    <ToDoCard/>
                </div>

               {/* <div className="bg-white text-2xl p-5 font-semibold flex justify-center items-center">
                <p>There is no pending Task</p>
               </div> */}
            </div>
        </div>
    );
};

export default ToDoContainer;