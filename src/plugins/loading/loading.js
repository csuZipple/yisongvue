import loading from '../../components/Loading/Loading'
let Loading = {};
Loading.install= function (Vue, options) {
  Vue.prototype.$loading = op => {
    let Tel = Vue.extend(loading);
    let component = new Tel({
      propsData: {
        text: op.text || "加载中...",
        duration: op.duration || "1s",
        show: op.show || false
      }
    }).$mount();
    document.body.appendChild(component.$el);
  }
};
export{
  Loading
}
