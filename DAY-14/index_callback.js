console.log("Task Started");
function myFunction1(callback)
{
    console.log("My Function 1");    
    callback();
}

function myFunction2(callback)
{
    console.log("My Function 2");
    callback();
}
function myFunction3(callback)
{
    console.log("My Function 3");
    callback();
}
function myFunction4(callback)
{
    console.log("My Function 4");
    callback();
}

myFunction4(()=>{
    myFunction3(()=>{
        myFunction2(()=>{
            myFunction1(()=>{
                console.log("Callback Hell Problem started");
            })
        })
    })
})

console.log("Task End");