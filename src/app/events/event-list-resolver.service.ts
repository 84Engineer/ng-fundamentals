import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/events.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolverService implements Resolve<any> {

    constructor(private eventService: EventService) {}

    resolve() {
        let events = this.eventService.getEvents();
        return events;
    }

}