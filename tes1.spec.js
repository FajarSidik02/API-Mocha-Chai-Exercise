import axios from "axios"
import  expect from '../API_Mocha_Exercise/call.js'
import { get1post,getAllPosts,post1posts,put1post,delete1post } from "./schema.js"

describe('GET API Testing',function(){ // GET ALL POSTS
    it('Get All Post', async function(){
        const res = await axios.get('https://dummyjson.com/posts')
        expect (res.data).to.be.jsonSchema(getAllPosts)
    })
})

describe('GET 1 API Testing',function(){ // GET 1 POSTS
    it('Get 1 Post by ID', async function(){
        const res = await axios.get('https://dummyjson.com/posts/1')
        expect (res.data).to.be.jsonSchema(get1post)
    })
})

describe('POST 1 API Testing',function(){ // POST 1 POSTS
    it('Post 1 Post by ID', async function(){
        const res = await axios.post('https://dummyjson.com/posts/add',{
            title : 'si kancil dan buaya',
            userId : 5
        })
        expect (res.data).to.be.jsonSchema(post1posts)
    })
})

describe('PUT 1 API Testing',function(){ // PUT 1 POSTS
    it('Put 1 Post by ID', async function(){
        const res = await axios.put('https://dummyjson.com/posts/2',{ // method put pada posts
        title : 'proyek roro jonggrang',
        body : 'semua proyek yang selesai satu malam',
        userId : 5
    })
        expect (res.data).to.be.jsonSchema(put1post)
    })
})

describe('DELETE 1 API Testing',function(){ // DELETE 1 POSTS
    it('Delete 1 Post by ID', async function(){
        const res = await axios.delete('https://dummyjson.com/posts/1')
        expect (res.data).to.be.jsonSchema(delete1post)
    })
})