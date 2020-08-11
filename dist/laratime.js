"use strict";
exports.__esModule = true;
var LaraTime = /** @class */ (function () {
    function LaraTime(echo) {
        var _this = this;
        this.echo = echo;
        this.eventListnerMap = {
            added: function (cb) {
                return _this.channel.listen(".laratime-added", function (model) { return cb(model); });
            },
            updated: function (cb) {
                return _this.channel.listen(".laratime-updated", function (model) { return cb(model); });
            },
            deleted: function (cb) {
                return _this.channel.listen(".laratime-deleted", function (model) { return cb(model); });
            }
        };
    }
    LaraTime.prototype.db = function (channelName, isPrivate) {
        if (isPrivate === void 0) { isPrivate = false; }
        var channel = isPrivate
            ? this.echo.private(channelName)
            : this.echo.channel(channelName);
        var laraTime = new LaraTime(this.echo);
        laraTime.setChannel(channel);
        return laraTime;
    };
    LaraTime.prototype.setChannel = function (channel) {
        this.channel = channel;
    };
    LaraTime.prototype.on = function (event, cb) {
        this.eventListnerMap[event](cb);
        return this;
    };
    return LaraTime;
}());
exports["default"] = LaraTime;
