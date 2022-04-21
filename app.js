import axios from 'axios';


async function getData(id = Number){
    let url = 'https://jsonplaceholder.typicode.com';

    let data = await axios.get(url+`/users/${id}`);
    let dataPost = await axios.get(url+`/posts?userId=${id}`);

    await dataPost.data.forEach(el =>{
        if(data.data['posts'] == undefined || null ) data.data['posts'] = [];
        else data.data['posts'].push(el);
    });
        
    return data.data;
}

export {
    getData
}