import axios from 'axios';

const TasksService = {
    async getTasks() {
        let res = await axios.get("https://278nggy6rg.execute-api.eu-west-2.amazonaws.com/dev/tasks/");
        let data = await res.data;
        return data;
    },
    async saveTask(task){
        let res = await axios.post("https://278nggy6rg.execute-api.eu-west-2.amazonaws.com/dev/tasks", task);
        return res;
    }
 };
 
 export default TasksService;