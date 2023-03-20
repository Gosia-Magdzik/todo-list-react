import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/tasksPage";
import TaskPage from "./features/tasks/taskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./common/Navigation";
import { toAuthor, toTask, toTasks } from "./routes";


export default () => (
   <HashRouter>
      <Navigation/>
         <Switch>
            <Route path={toTask()}>
               <TaskPage/>
            </Route>
            <Route path={toTasks()}>
               <TasksPage/>
            </Route>
            <Route path={toAuthor()}>
               <AuthorPage/>
            </Route>
            <Route path="/">
               <Redirect to={toTasks()} />
            </Route>
         </Switch>
   </HashRouter>
);