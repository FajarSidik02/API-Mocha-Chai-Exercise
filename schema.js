export const get1post = { //get 1 post
    type : "object",
    properties :{
        id : {type : 'number'},
        title : {type : 'string'},
        body : {type : 'string'},
        tags : {type : 'array'},
        reactions : {type : 'object',
            properties : {
                likes : {type:'number'},
                dislikes: {type:'number'}
            }
        },
        views : {type : 'number'}, // coba tanya mas abid kenapa dia gamau number
        userId : {type : 'number'}
    }
}

export const getAllPosts = { //get all post
    type: 'object',
    properties : {
        posts: {type : 'array',
            items : get1post
        }
    }
    
}

export const post1posts ={ //post 
    type:'object',
    properties : {
        id : {type : 'number'},
        title : {type : 'string'},
        userId : {type : 'number'}
    }
}

export const put1post = {
    type : 'object',
    properties : {
        id : {type : 'number'},
        title : {type : 'string'},
        body : {type : 'string'},
        tags : {type : 'array'},
        reactions : {type : 'object',
            properties : {
                likes : {type:'number'},
                dislikes: {type:'number'}
            }
        }
    }
}

export const delete1post = {
    type : 'object',
    properties : {
        id: {type : 'number'},
        title : {type : 'string'},
        body : {type : 'string'},
        tags : {type : 'array'},
        reactions : {type : 'object',
            properties : {
                likes : {type:'number'},
                dislikes: {type:'number'}
            }
        },
        views : {type : 'number'}, // coba tanya mas abid kenapa dia gamau number
        userId : {type : 'number'},
        isDeleted : {type : 'boolean'}
        // deletedOn : {type : } // tanya mas abid iso time tu apa
}}