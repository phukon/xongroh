import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
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
    getPostsByUserId: builder.query({
      query: (userId) => ({
        url: `/post/getPostsByUserId/${userId}`,
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
      query: ({ postId }) => ({
        url: `/post/likePost/${postId}`,
        method: 'PATCH',
      }),
    }),
    savePost: builder.mutation({
      query: ({ postId }) => ({
        url: `/post/savePost/${postId}`,
        method: 'PATCH',
      }),
    }),
    likeComment: builder.mutation({
      query: ({ commentId }) => ({
        url: `/post/likeComment/${commentId}`,
        method: 'PATCH',
      }),
    }),
    commentTrigger: builder.mutation({
      query: ({postId, parentId, text}) => ({
        url: `/post/comments/${postId}`,
        method: 'POST',
        body : {text, parentId}
      })
    }),
    updateCommentTrigger: builder.mutation({
      query: ({commentId, text}) => ({
        url: `/post/comments/${commentId}`,
        method: 'PUT',
        body: {text}
      })
    }),
    deleteCommentTrigger: builder.mutation({
      query: ({commentId}) => ({
        url: `/post/comments/${commentId}`,
        method: 'DELETE'
      })
    }),
    likeFeedback: builder.mutation({
      query: ({ feedbackId }) => ({
        url: `/post/likeFeedback/${feedbackId}`,
        method: 'PATCH',
      }),
    }),
    feedbackTrigger: builder.mutation({
      query: ({postId, parentId, text}) => ({
        url: `/post/feedbacks/${postId}`,
        method: 'POST',
        body : {text, parentId}
      })
    }),
    updateFeedbackTrigger: builder.mutation({
      query: ({feedbackId, text}) => ({
        url: `/post/feedbacks/${feedbackId}`,
        method: 'PUT',
        body: {text}
      })
    }),
    deleteFeedbackTrigger: builder.mutation({
      query: ({feedbackId}) => ({
        url: `/post/feedbacks/${feedbackId}`,
        method: 'DELETE'
      })
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
  useGetPostsByUserIdQuery,
  // useGetPostsByUserIdQuery,
  useSavePostMutation,
  useLikeCommentMutation,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useFeedbackTriggerMutation,
  useLikeFeedbackMutation,
  useUpdateFeedbackTriggerMutation,
  useDeleteFeedbackTriggerMutation,
  useLikePostMutation,
  useUpdateCommentTriggerMutation,
  useDeleteCommentTriggerMutation,
  useCommentTriggerMutation,
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
