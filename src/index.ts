import { add } from "./someFunc";

//Autorun first function
(() => {
    const result = add(22, 33);
    console.log(result);
})();
