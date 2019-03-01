var YouTube = (function (url) {
  function YouTube() {
    this.args = {};
  }

  function buildQueryParams() {
    var i = 0;
    var char = "";
    var params = "";

    for(var prop in this.args) {
      char = (i === 0) ? "?" : "&";
      params += char + prop + "=" + this.args[prop];
      i++;
    }

    return params;
  }

  function getUrl() {
    return url + this.getVideoId() + buildQueryParams.call(this);
  }

  YouTube.prototype.autoplay = function () {
    this.args.autoplay = 1;
    return this;
  }

  YouTube.prototype.hideControls = function () {
    this.args.controls = 0;
    return this;
  }

  YouTube.prototype.videoId = function (videoId) {
    this.videoId = videoId;
  }

  YouTube.prototype.getVideoId = function () {
    return this.videoId;
  }

  YouTube.prototype.getVideo = function () {
    return getUrl.call(this);
  }

  return YouTube;
})('https://www.youtube.com/embed/');
