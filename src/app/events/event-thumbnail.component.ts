import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
        <div [routerLink]="['/event', event.id]" class="well hoverwell thumbnail">
            <h2>{{event.name | uppercase}}</h2>
            <div>Date: {{event.date | date: 'shortDate'}}</div>
            <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">Time: {{event.time}}
                <span *ngSwitchCase="'8:00 am'">(Too Early)</span>
                <span *ngSwitchCase="'10:00 am'">(Too Late)</span>
                <span *ngSwitchDefault>(Normal)</span>
            </div>
            <div>Price: {{event.price | currency: 'USD'}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event.location.address}}</span>
                <span class="pad-left">{{event.location.country}}, {{event.location.city}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                OnlineURL: {{event.onlineUrl}}
            </div>
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
}