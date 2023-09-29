import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { apiSlice } from '../api/apiSlice'

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.timestamp.localeCompare(a.timestamp),
})

const initialState = postsAdapter.getInitialState()

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: '/post/getAllPosts',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformResponse: (responseData) => {
        const loadedPosts = responseData.map((post) => {
          post.id = post._id
          return post
        })
        return postsAdapter.setAll(initialState, loadedPosts)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'Post', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'Post', id })),
          ]
        } else return [{ type: 'Post', id: 'LIST' }]
      },
    }),
    getPostById: builder.query({
      query: (postId) => ({
        url: `/post/getPostById/${postId}`,
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformResponse: (responseData) => {
        return responseData
      },
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: '/post/createPost',
        method: 'POST',
        body: {
          ...initialPost,
        },
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    updatePost: builder.mutation({
      query: (initialPost) => ({
        url: '/post/updatePost',
        method: 'PATCH',
        body: {
          ...initialPost,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }],
    }),
    likePost: builder.mutation({
      query: ({ postId, userId }) => ({
        url: `/post/likePost/${postId}`,
        method: 'PATCH',
        body: { userId },
      }),
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/post/deletePost`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  // useGetPostsByUserIdQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
} = postsApiSlice

// returns the query result object
export const selectPostsResult = postsApiSlice.endpoints.getPosts.select()

// Creates memoized selector
const selectPostsData = createSelector(
  selectPostsResult,
  (postsResult) => postsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors((state) => selectPostsData(state) ?? initialState)
