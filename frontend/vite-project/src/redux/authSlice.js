import React from 'react'
import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPost = createAsyncThunk('posts/fetchPost', async()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
})

const initialState={
  data: [],
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchPost.pending, (state)=>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchPost.fulfilled, (state, action)=>{
      state.loading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchPost.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.error.message;
    })
  }
})

export default authSlice.reducer