import ToDoContainer from '@/components/todo/ToDoContainer';
import Container from '@/components/ui/Container';


const ToDo = () => {
    return (
        <Container>
            <h1 className='text-center text-3xl my-10'>My To do app</h1>
          <ToDoContainer/>
        </Container>
    );
};

export default ToDo;