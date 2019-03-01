var Device = (function () {
  function Device(type) {
    this.type = type;
  }

  function device() {
    this.device = document.createElement("div");

    if(typeof this.type === "undefined" || typeof this.type !== "string") {
      var msg = "The device can not be created because {0} is not a device!";
      throw new Error(
        msg.format(this.type)
      );
    }

    if(this.type.length === 0) {
      throw new Error("The device can not be created because device parameter is wrong!");
    }

    this.device.setAttribute("id", this.type);
    document.body.appendChild(this.device);
    var h1 = document.createElement("h1");
    var text = document.createTextMode("Play a movie on a {0} with {1}".format(this.type, "APP?!"));

    this.device.appendChild(h1);
    h1.appendChild(text);

    return this;
  }

  function createScreen() {
    var screen = document.createElement("iframe");
    this.device.appendChild(screen);

    return screen;
  }

  Device.prototype.create = function () {
    device.call(this);
    return this;
  }

  Device.prototype.createApp = function (appName) {
    if(typeof appname === "undefined" || typeof appName !== "string") {
      throw new Error("The app can not be created because is " + typeof appName + " and should be a string!!");
    }

    if(appName.length === 0) {
      throw new Error("The app can not be created because the name is missing!");
    }

    this.app = new self[appName];
    return this.app;
  }

  Device.prototype.getApp = function () {
    return this.app;
  }

  Device.prototype.getScreen = function () {
    return this.screen;
  }

  Device.prototype.screenSize = function (width, height) {
    this.screen = createScreen.call(this);

    this.screen.setAttribute("width", width);
    this.screen.setAttribute("height", height);
    this.screen.setAttribute("frameborder", 0);
    this.screen.setAttribute("allow", "autoplay");

    return this;
  }

  Device.prototype.remoteControl = function () {
    (new RemoteControl(this)).create();
    return this;
  }

  Device.prototype.get = function () {
    return this.device;
  }

  Device.prototype.state = function (action) {
    return action.replace(/^[^A-Z]+/g, '').toLowerCase();
  }

  return Device;
})();
