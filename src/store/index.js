import { createStore } from "vuex";

// export default createStore({
//   state: {
//     сhecked: false,
//   },
//   getters: {
//     isChecked() {
//       if (this.modelValue instanceof Array) {
//         return this.modelValue.includes(this.value);
//       }
//       // Note that `true-value` and `false-value` are camelCase in the JS
//       return this.modelValue === this.trueValue;
//     },
//   },
//   mutations: {
//     updateInput(event) {
//       let isChecked = event.target.checked;
//       if (this.modelValue instanceof Array) {
//         let newValue = [...this.modelValue];
//         if (isChecked) {
//           newValue.push(this.value);
//         } else {
//           newValue.splice(newValue.indexOf(this.value), 1);
//         }
//         this.$emit("change", newValue);
//       } else {
//         this.$emit("change", isChecked ? this.trueValue : this.falseValue);
//       }
//     },
//   },
//   actions: {},
//   modules: {},
// });
