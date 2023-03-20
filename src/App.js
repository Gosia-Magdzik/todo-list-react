import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/tasksPage";
import TaskPage from "./features/tasks/taskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./common/Navigation";

export default () => (
   <HashRouter>
      <Navigation/>
         <Switch>
            <Route path="/zadania/:id">
               <TaskPage/>
            </Route>
            <Route path="/zadania">
               <TasksPage/>
            </Route>
            <Route path="/ToAuthor">
               <AuthorPage/>
            </Route>
            <Route path="/">
               <Redirect to="/zadania" />
            </Route>
         </Switch>
   </HashRouter>
);