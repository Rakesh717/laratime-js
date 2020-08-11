import Echo from "laravel-echo";
import { Channel } from "laravel-echo/dist/channel";

export default class LaraTime {
  private channel: Channel;

  private eventListnerMap = {
    added: (cb) => {
      return this.channel.listen(".laratime-added", (model) => cb(model));
    },
    updated: (cb) => {
      return this.channel.listen(".laratime-updated", (model) => cb(model));
    },
    deleted: (cb) => {
      return this.channel.listen(".laratime-deleted", (model) => cb(model));
    },
  };

  constructor(private echo: Echo) {}

  db(channelName: string, isPrivate: boolean = false): LaraTime {
    let channel = isPrivate
      ? this.echo.private(channelName)
      : this.echo.channel(channelName);

    let laraTime = new LaraTime(this.echo);
    laraTime.setChannel(channel);

    return laraTime;
  }

  private setChannel(channel: Channel): void {
    this.channel = channel;
  }

  on(event: string, cb: Function): LaraTime {
    this.eventListnerMap[event](cb);

    return this;
  }
}
