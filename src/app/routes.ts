import { Routes } from '@angular/router'
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/event-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRouts: Routes = [
    { path: 'event/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'event/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: "/events", pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]