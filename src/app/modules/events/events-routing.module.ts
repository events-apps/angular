import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventListComponent
  },
  {
    path: 'create',
    component: CreateEventComponent
  },
  {
    path: ':eventId',
    component: EventDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
