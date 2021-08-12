/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        postTitle
        postBody
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        postTitle
        postBody
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        postTitle
        postBody
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      postTitle
      postBody
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      postTitle
      postBody
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      postTitle
      postBody
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
