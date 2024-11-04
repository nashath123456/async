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
async function snack(){
    try{
       await makewaffle();
       await geticecream();
       console.log("set up the table")
    }catch (error){
        console.log(`${error}so make chocolate syrup`)
    }
}
snack()
