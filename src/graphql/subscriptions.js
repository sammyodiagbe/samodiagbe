/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      postTitle
      postBody
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          postID
          content
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      postTitle
      postBody
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          postID
          content
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      postTitle
      postBody
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          postID
          content
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      content
      owner
      createdAt
      updatedAt
      post {
        id
        postTitle
        postBody
        owner
        createdAt
        updatedAt
        comments {
          nextToken
        }
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
      owner
      createdAt
      updatedAt
      post {
        id
        postTitle
        postBody
        owner
        createdAt
        updatedAt
        comments {
          nextToken
        }
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
      owner
      createdAt
      updatedAt
      post {
        id
        postTitle
        postBody
        owner
        createdAt
        updatedAt
        comments {
          nextToken
        }
      }
    }
  }
`;
