const prompt =require('prompt-sync')()

let API_KEY1="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"
let requestURL= "https://api.openai.com/v1/images/generations"

let accessToken="pina_AMAXGAQXADD6CAYAGCAGODW7UXID7EYBQBIQC654WPUZEE3JIZS4KWHXYLGQIFO54PFE4FN4DZYBNOW7SR3MACMV2JNFA5IA"

async function fetchData(hairstyles){
    let requestURL2="&https://api.pinterest.com/v5/terms/suggested/?term="+hairstyles +"&limit=4"

    const options={
        method: "GET",
        headers: {
         Authorization: 'Bearer pina_AMAXGAQXADD6CAYAGCAGODW7UXID7EYBQBIQC654WPUZEE3JIZS4KWHXYLGQIFO54PFE4FN4DZYBNOW7SR3MACMV2JNFA5IA',
        "Content-Type": "application/json",
        },
     }
    const response= await fetch(requestURL2)
    const data= await response.json()
    console.log(data)
}
//fetchData()
let question2= prompt("what pin are you looking for?")
fetchData(question2)
  
async function createHairstyle(hairstyleData){
const options={
   method: "POST",
   headers: {
    Authorization: 'Bearer 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',
   "Content-Type": "application/json",
   },
   body: JSON.stringify(hairstyleData),
}
  const response= await fetch(requestURL, options)
  const data= await response.json();
  console.log(data)
}
let question= prompt("what hairstyle do you want?")
createHairstyle(
    {
     prompt: question
    }
)
