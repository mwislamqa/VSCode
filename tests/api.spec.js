
import{test, expect} from '@playwright/test'
import { request } from 'http'

//test.describe('all api validaiotn', ()=>
test('api testing get method validation ', async({request})=>{
const baseURL='https://gorest.co.in'
const response =request.get(`${baseURL}/public/v2/users`)
const reqBody= JSON.parse()
console.log(reqBody)

})
//})