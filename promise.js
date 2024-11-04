function makewaffle(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
     resolve("waffle is ready")   

    }, 2500);
})

}
function geticecream(){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=> {
            let icecream=true;
            if(icecream){
                resolve("got icecream")
            }else{
                reject("did not get icecream")
            }
        }, 1500);
    })
}

function snack(){
    makewaffle().then(function(data){
     console.log(data)   
     return geticecream()
    })
    .then(function(data){
        console.log(data)
        console.log("set up the table")
    })
    .catch(function(error){
        console.log(`${error}so make choclate syrup`)

    })
    
    
}
    


    

