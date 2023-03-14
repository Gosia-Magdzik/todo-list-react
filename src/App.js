import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import  TasksPage  from "./features/tasks/TasksPage";
import Author from "./features/author/Author";

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
               <Author/>
            </Route>
            <Route path="/">
               <Redirect to="/zadania" />
            </Route>
         </Switch>
      </nav>
   </HashRouter>
);