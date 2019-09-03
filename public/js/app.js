console.log('Client side javascript file is loaded.')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

const weatherinfo= (address)=>{

fetch('http://localhost:3000/weather?address='+address).then((response) => {
    response.json().then((data) => {
       if(data.error){
        msg1.textContent= data.error
       }else{
        msg1.textContent= data.location
        msg2.textContent= data.forecast
        console.log(data.address)
       }
    })
})
}



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    weatherinfo(location)
})