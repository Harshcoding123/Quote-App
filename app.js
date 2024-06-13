let url= "https://api.quotable.io/random";
let b1= document.querySelector("#b1");
let b2= document.querySelector("#b2");
let h3=document.querySelector("h3");
let author= document.querySelector("#author");
async function randomFact(){
    let response=  await fetch(url);
    // console.log(response);
    let usefullData= await response.json();
    // console.log(usefullData);
    return usefullData;
    

}
function tweet(r){
    randomFact().then((result)=>{
        window.open("https://twitter.com/intent/tweet?text="+r.content,
            "Tweet window","width=600,heigtht= 300");

    });   
}



b1.addEventListener("click",()=>{
    randomFact().then((result)=>{
        console.log(result);
        console.log(result.content);
        console.log(result.author);
        h3.innerText =result.content;
        author.innerText =result.author;

        b2.addEventListener("click",()=>{
            tweet(result);
         })
         
    })
   

})
