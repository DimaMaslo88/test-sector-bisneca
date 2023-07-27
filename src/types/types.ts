// posts response type
export type PostsType = {
    userId: number
    id: number
    title: string
    body: string
}

// components types
// Pagination
export type ContentPaginationType = {
    totalPosts: number
    elementOnPage: number
    currentPage: number
}
// MainContent
export type MainContentType = {
    sortId: boolean

}
