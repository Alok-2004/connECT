import { createContext, useReducer } from "react";

const PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {},
});

const postListReducer = (currPostList , action) => {
    return currPostList;
}

const PostListProvider = ({children}) => {

    const [postList , dispatchPostList] = useReducer(postListReducer , DEFAULT_POST_LIST)

    const addPost = () => {

    }

    const deletePost = () => {

    }

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
          {children}
        </PostList.Provider>
      );
};

const DEFAULT_POST_LIST = [
{
    id : '1',
    title : 'Going to Mumbai',
    body : 'Hi Friends , I am Going to Patna for my vacation. Hope to enjoy to a lot, Peace Out.',
    reactions : 2,
    userID : 'user-g',
    tags : ["Vacation" , "Mumbai", "Patna" , "Enjoyig"],
},
{
    id : '2',
    title : 'Paaaaaasss HO gye Beti',
    body : 'Abb ghar Jana hai',
    reactions : 2,
    userID : 'user-g',
    tags : ["Vacation" , "Graduation", "Patna" , "Enjoyig"],
}
]

export {PostListProvider , PostList};