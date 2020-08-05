import React from 'react'
import {Route, Switch} from "react-router-dom"
import { NotFound } from './NotFound/NotFound'
import {Contact} from './Contact/Contact'
import { About } from './About/About'
import { WorkProjects } from './Projects/WorkProjects'
import { Footer } from './Footer/Footer'
import { Project } from './Projects/Project'

export function Routing() {
    return (
        <Switch>
        <Route exact path="/" component={Contact} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route path="/project/:id" component={WorkProjects}/>
        <Route path="/footer" component={Footer} />
        <Route path="*" component={NotFound} />
        </Switch>
    );
}
