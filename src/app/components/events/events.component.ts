import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { Subject } from 'rxjs';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import {
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

const RED_CELL: 'red-cell' = 'red-cell';
const BLUE_CELL: 'blue-cell' = 'blue-cell';

@Component({
  selector: 'app-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  event:any;
  title:any;
  location:any;
  p1:any;
  p2:any;
  p3:any;

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  view: string = 'month';

  clickedDate: string = '';
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: new Date('12/10/2018'),
      end: new Date('12/10/2018'),
      title: 'Pointwise Technology Conference',
      p1: '1. Review of the key happenings at Pointwise, USA including Software features which Pointwise had focused on & key challenges faced.',
      p2: '2. A series of presentations by Pointwise users titled This is how I mesh, focusing on meshing challenges and creating a platform for discussion on features users would like to see in the next version of Pointwise.',
      p3: '3. A summary of upcoming features in Pointwise including applications and discussions on feature-requests from users.',
      location:'Hyderabad',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: new Date('12/11/2018'),
      end: new Date('12/11/2018'),
      title: "Pointwise Technology Conference",
      p1: "1. Review of the key happenings at Pointwise, USA including Software features which Pointwise had focused on & key challenges faced.",
      p2: "2. A series of presentations by Pointwise users titled This is how I mesh, focusing on meshing challenges and creating a platform for discussion on features users would like to see in the next version of Pointwise.",
      p3: "3. A summary of upcoming features in Pointwise including applications and discussions on feature-requests from users.",
      location:"Bangalore",
      color: colors.yellow,
      actions: this.actions
    },

    {
      start: new Date('12/13/2018'),
      end: new Date('12/13/2018'),
      title: "Pointwise Technology Conference",
      p1: "1. Review of the key happenings at Pointwise, USA including Software features which Pointwise had focused on & key challenges faced.",
      p2: "2. A series of presentations by Pointwise users titled This is how I mesh, focusing on meshing challenges and creating a platform for discussion on features users would like to see in the next version of Pointwise.",
      p3: "3. A summary of upcoming features in Pointwise including applications and discussions on feature-requests from users.",
      location:"Thiruvananthapuram",
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: new Date('12/14/2018'),
      end: new Date('12/14/2018'),
      title: "Pointwise Technology Conference",
      p1: "1. Review of the key happenings at Pointwise, USA including Software features which Pointwise had focused on & key challenges faced.",
      p2: "2. A series of presentations by Pointwise users titled This is how I mesh, focusing on meshing challenges and creating a platform for discussion on features users would like to see in the next version of Pointwise.",
      p3: "3. A summary of upcoming features in Pointwise including applications and discussions on feature-requests from users.",
      location:"Chennai",
      color: colors.yellow,
      actions: this.actions
    },

    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event in Hyderabad',
    //   color: colors.red,
    //   actions: this.actions,
    //   allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // },
    //
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue,
    //   allDay: true
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: new Date(),
    //   title: 'A draggable and resizable event',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // }
  ];

  refresh: Subject<any> = new Subject();

  cssClass: string = RED_CELL;


  refreshView(): void {
    this.cssClass = this.cssClass === RED_CELL ? BLUE_CELL : RED_CELL;
    this.refresh.next();
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (day.date.getDate() % 2 === 1) {
        day.cssClass = this.cssClass;
      }
    });
  }

  constructor(){}

  ngOnInit() {
  }

}
