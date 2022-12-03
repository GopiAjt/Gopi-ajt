// //objects
// let person = {
//     name:"gopi",
//     age:"22",
//     yop:"2022",
//     city:"belagaum",
//     stream:"cs"
// }
// console.log(person.name);
// console.log(person.city);
// person.city="belngaluru";
// console.log(person.city);

// //strings
// let me = "gopi"

// console.log(me.toLocaleUpperCase());
// console.log(me.toLocaleLowerCase());

// let is = "  trish  "
// console.log(is.trim());

// console.log(me.charAt(2));

// var a = 10

// console.log(`value of a is ${d}`);//templet string using back tick key
// console.log("value of a is "+a);

// function onclick()
// {
//     document.getElementById("sub");
// }




const email = document.getElementById('email')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const errorEliment = document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages = []
    if(email.value === '' || email.value == null)
    {
        messages.push('email is required')
    }

    if(phone.value.length < 10)
    {
        messages.push('phone number should be 10 digit')
    }
    if(phone.value.length > 10)
    {
        messages.push('phone number should be 10 digit')
    }
    if(messages.length > 0)
    {
        e.preventDefault()
        errorEliment.innerText = messages.join(',')
    }
})