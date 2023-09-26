import { API_BASE_URL } from "../app-config";

export function call(api,method , request){

    let options = {
        headers:new Headers({
            "Content-Type" : "application/json",
        }),
        url :API_BASE_URL + api,
        method : method
    };

    if(request){
        options.body = JSON.stringify(request);

    }

    // return fetch(options.url,options).then((response)=>{
    //     response.json().then((json)=>{
    //         if(!response.ok){
    //             return Promise.reject(json);
    //         }
    //         console.log("API SERVICE " , json);
    //         return json
    //     })
    // })

    return fetch(options.url,options).then(response =>{
        console.log(response);
        return response.json();
    })
    


}