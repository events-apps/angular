import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventItemComponent } from './components/event-item/event-item.component';

@NgModule({
  declarations: [EventListComponent, EventItemComponent, EventDetailsComponent, CreateEventComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
