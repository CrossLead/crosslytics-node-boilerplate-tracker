import { Identity, Page, TrackedEvent, Tracker } from 'crosslytics';

export class SampleTracker implements Tracker {
  constructor(public id: string) {
    // Initialize your 3rd party service here. Example:
    // this.googleAnalytics = ua(id);
  }

  public identify(identity: Identity) {
    // Update 3rd party service with user info. Example:
    // this.googleAnalytics.set('uid', identity.userId);
  }

  public async page(page: Page) {
    // Submit current page to your 3rd party service here. Example:
    // this.googleAnalytics.pageview({
    //   dl: page.url,
    //   dr: page.referrer,
    //   dt: page.title,
    // });
  }

  public async track<T>(event: TrackedEvent<T>) {
    // Submit event data to your 3rd party service here. Example:
    // this.googleAnalytics.event(event.name, event.category);
  }
}
