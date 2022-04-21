import {getData} from './app.js';


let a = getData(1);

a.then((data) => {
    console.log(data);
})
.catch(e => console.log(e));
