import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Event } from '@events/models/event';
import { ApiResponse } from '@core/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private readonly http: HttpClient) { }

  fetchEvents(searchText?: string) {
    const params = searchText ? { search: searchText } : undefined;
    return this.http.get<ApiResponse<Event[]>>('events', { params }).pipe(map(response => response.data));
  }

  fetchEvent(eventId: string) {
    return this.http.get<ApiResponse<Event>>(`events/${eventId}`).pipe(map(response => response.data));
  }

  createEvent(event: Omit<Event, '_id'>) {
    return this.http.post<ApiResponse<Event>>('events', event).pipe(map(response => response.data));
  }

  deleteEvent(eventId: string) {
    return this.http.delete<ApiResponse<Event>>(`events/${eventId}`).pipe(map(response => response.data));
  }
}
