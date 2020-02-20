import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { EventsService } from '@events/services/events.service';
import { Event } from '@events/models/event';
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events$: Observable<Event[]>
  searchSubject = new BehaviorSubject('');

  constructor(private readonly eventsService: EventsService) { }

  ngOnInit() {
    this.events$ = this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(search => this.eventsService.fetchEvents(search))
    );
  }

  search(searchText: string) {
    this.searchSubject.next(searchText);
  }
}
