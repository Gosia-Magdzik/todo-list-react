import { HashRouter, Link, Switch, Route } from "react-router-dom";
import  Tasks  from "./features/tasks/Tasks";
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
               <Tasks/>
            </Route>
            <Route path="/ToAuthor">
               <Author/>
            </Route>
         </Switch>
      </nav>
   </HashRouter>
);