var RemoteControl = (function (){
  function RemoteControl(device) {
    this.device = device;
  }

  RemoteControl.prototype.create = function () {
    var remoteControl = document.createElement("button");

    remoteControl.setAttribute("type","button");
    remoteControl.setAttribute("id","powerOff");
    remoteControl.setAttribute("title","Your {0} is powered off".format(this.device.type));

    this.device.get().appendChild(remoteControl);
    this.powerControl();
  }


  RemoteControl.prototype.powerOn = function() {
    var app = this.device.getApp;
    this.device.screen.setAttribute("src", app.getVideo());
  }

  RemoteControl.prototype.powerOff = function() {
    this.device.screen.removeAttribute("src");
  }

  RemoteControl.prototype.powerControl = function () {
    var buttons = this.device.get().getElementsByTagName("button");

    var i = 0;
    var _this = this;
    while( i < button.length) {
      buttons[i].addEventListener("click", function() {
        var method = this.getAttribute("id");
        if("powerOff" === method) {
          _this.action("powerOn", this);
        } else if("powerOn" === method) {
          _this.action("powerOff", this);
        }
      });
      i++;
    }
  }


  return RemoteControl;
})();
