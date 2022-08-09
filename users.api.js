const usersPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
            return response.json();
        }))
    },2000)
})

 export const usersRequest = () => {
    return usersPromise;
};





