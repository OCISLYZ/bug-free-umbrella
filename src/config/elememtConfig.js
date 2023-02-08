import { Button, Menu, MenuItem, Form } from "element-ui";

const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(MenuItem)
    Vue.use(Menu)
    Vue.use(Form)
  }
}


export default element