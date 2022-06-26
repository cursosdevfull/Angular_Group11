import { Component, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class BaseComponent {
  abstract messageToUnsubscribe: string;
  protected messageToSMS = '';

  abstract alert(message: string): void;

  subject: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.subject.next();
    this.subject.unsubscribe();
    console.log(this.messageToUnsubscribe);
  }

  setNotification(message: string): void {
    this.messageToSMS = message;
  }

  sendNotification() {
    console.log('Notification sent');
  }
}
