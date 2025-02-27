import type { RootState } from "."
import type { Comment } from "../pages"

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

const commentsAdapter = createEntityAdapter<Comment>()

const initialState = commentsAdapter.getInitialState()

const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		addComment: commentsAdapter.addOne,
		addComments: commentsAdapter.addMany,
	},
})

export const { addComment, addComments } = commentsSlice.actions

export const selectors = commentsAdapter.getSelectors(
	(state: RootState) => state.comments,
)

export default commentsSlice.reducer
