import avAlert from './alert'
import avButton from './button'
import avIcon from './icon'
import { avRow, avCol } from './grid'

let avButtonGroup = avButton.avButtonGroup

let components = {
  avAlert,
  avButton,
  avButtonGroup,
  avIcon,
  avRow,
  avCol
}

// for(let item of Object.values(compnents) ){
//   if(!item.install && item.name){
//     item.install = function(Vue) {
//       Vue.component(item.name, item);
//     };
//   }
// }
//
// const install = function(Vue) {
//   if (install.installed) return;
//
//   for(let item of Object.values(compnents) ){
//     if(item.install){
//       Vue.use(item)
//     }
//   }
// }

// auto install
// if (typeof window !== 'undefined' && window.Vue) {
//  install(window.Vue);
//  };

module.exports = components
