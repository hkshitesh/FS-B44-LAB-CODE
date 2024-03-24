const promise= new Promise((resolve,reject)=>{
    console.log("Promise Concept");
if(true)
{
    const data="gfg";
    resolve(data);
}
else{
    errorCode="1001"
    reject(errorCode);
}
});

promise.then((dt)=>{console.log("Promise Resolved. Welcome: "+dt);})
.catch((errorCode)=>{console.log("Promise Rejected. Error Code is: "+errorCode);});