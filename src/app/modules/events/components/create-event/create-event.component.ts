import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EventsService } from '@events/services/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly eventsService: EventsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: '',
      description: '',
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  handleSubmit() {
    this.eventsService.createEvent(this.formGroup.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.router.navigate(['/events']);
      });
  }

  handleCancel() {
    this.router.navigate(['/events']);
  }
}
