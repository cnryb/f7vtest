import Vue from 'vue';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7Vue from 'framework7-vue';
import App from './app.vue';

Framework7.use(Framework7Vue);

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  render: c => c(App),
  mounted() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
  methods: {
    onBackKeyDown: function (e) {
      e.preventDefault();
      debugger;
      if (this.$f7.view.current.history.length > 1) {
        this.$f7.view.current.router.back();
      } else {
        const self = this;
        // Create toast
        if (!self.toastCenter) {
          self.toastCenter = self.$f7.toast.create({
            text: "连续点击退出应用程序",
            position: "center",
            closeTimeout: 1000
          });
        }
        // Open it
        self.toastCenter.open();

        document.removeEventListener("backbutton", self.onBackKeyDown, false); //注销返回键 //1秒后重新注册
        var intervalID = window.setInterval(function () {
          window.clearInterval(intervalID);
          document.addEventListener("backbutton", self.onBackKeyDown, false); //返回键
        }, 1000);
      }
    }
  },
});


var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    console.log('Received Event: ' + id);
  }
};

app.initialize();