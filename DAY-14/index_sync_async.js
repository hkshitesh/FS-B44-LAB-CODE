console.log("First Line");

// function sleep(milliseconds)
// {
//     let startTime  = new  Date().getTime();
//     console.log('Process Started for Second Line');
//     while(new Date().getTime()< startTime+milliseconds)
//     {
//         console.log("Second Line");
//     }
//     console.log("Process Done for Second Line")
// }

// sleep(5000);


function sleep(milliseconds)
{ 
    console.log('Process Started for Second Line');
    setTimeout(()=>{
        console.log("Second Line");
    },milliseconds);   
}

sleep(5000);
console.log("Third Line");