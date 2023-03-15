import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import  TasksPage from "./features/tasks/tasksPage";
import AuthorPage from "./features/author/AuthorPage";

export default () => (
   <HashRouter>
      <nav>
         <ul>
            <li>
                <Link to="/zadania">Zadania</Link>
            </li>
            <li>
                <Link to="/ToAuthor">O autorce</Link>
            </li>
         </ul>
         <Switch>
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
      </nav>
   </HashRouter>
);