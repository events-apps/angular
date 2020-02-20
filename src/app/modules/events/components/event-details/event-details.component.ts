import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { Event } from '@events/models/event';
import { EventsService } from '@events/services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, OnDestroy {
  event$: Observable<Event>;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.event$ = this.activatedRoute.params.pipe(switchMap(params => this.eventsService.fetchEvent(params.eventId)));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  deleteEvent(eventId: string) {
    this.eventsService.deleteEvent(eventId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.router.navigate(['/events']);
      });
  }
}
