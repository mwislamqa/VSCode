
const {test, expect}=require('@playwright/test')

test('get method', async  ({request})=>{
//const baseURL='https://gorest.co.in'
const response = await request.get('https://gorest.co.in/public/v2/users')
const responsebody=JSON.parse(await response.text())
console.log(responsebody)

})

test('api validation ', async ()=>{


})