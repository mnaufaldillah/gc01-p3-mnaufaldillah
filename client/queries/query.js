import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
    mutation RegisterUser($register: NewRegister) {
        registerUser(register: $register) {
            _id
            name
            username
            email
        }
    }
`

export const LOGIN_USER = gql`
    mutation LoginUser($login: NewLogin) {
        loginUser(login: $login) {
            access_token
        }
    }
`

export const SEARCH_USER = gql`
    query SearchUser($inputSearch: String) {
        searchUser(inputSearch: $inputSearch) {
            _id
            name
            username
            email
            followers {
                _id
                name
                username
                email
            }
            followings {
                _id
                name
                username
                email
            }
        }
    } 
`

export const GET_USER = gql`
    query GetUser($userId: ID) {
        getUser(userId: $userId) {
            _id
            name
            username
            email
            followers {
                _id
                name
                username
                email
            }
            followings {
                _id
                name
                username
                email
            }
        }
    } 
`

export const GET_POSTS = gql`
    query GetPosts {
        getPosts {
            _id
            content
            imgUrl
            tags
            comments {
                content
                username
                createdAt
                updatedAt
            }
            likes {
                username
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
            authorId
            author {
                _id
                name
                username
                email
            }
        }
    }
`

export const GET_POST_BY_ID = gql`
    query GetPostById($postId: ID) {
        getPostById(postId: $postId) {
            _id
            content
            imgUrl
            tags
            comments {
                content
                username
                createdAt
                updatedAt
            }
            likes {
                username
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
            authorId
            author {
                _id
                name
                username
                email
            }
        }
    }
`

export const ADD_POST = gql`
    mutation AddPost($post: NewPost) {
        addPost(post: $post) {
            _id
            content
            imgUrl
            tags
            comments {
                content
                username
                createdAt
                updatedAt
            }
            likes {
                username
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
            authorId
        }
    }
`

export const COMMENT_POST = gql`
    mutation CommentPost($comment: NewComment) {
        commentPost(comment: $comment) {
            content
            username
            createdAt
            updatedAt
        }
    }
`

export const LIKE_POST = gql`
    mutation LikePost($like: NewLike) {
        likePost(like: $like) {
            username
            createdAt
            updatedAt
        }
    }
`

export const FOLLOW_USER = gql`
    mutation FollowUser($follow: NewFollow) {
        followUser(follow: $follow) {
            _id
            followingId
            followerId
            createdAt
            updatedAt
        }
    }
`