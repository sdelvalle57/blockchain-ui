// import { gql, useQuery } from '@apollo/client';
// import { Post } from './post';
 
// interface InitBlockCHain {
//   posts: Post[];
// }
 
// const GET_POSTS = gql`
//   query {
//     posts {
//       id
//       title
//       paragraphs
//     }
//   }
// `;
 
// export function usePostsQuery() {
//   return useQuery<PostsQueryResponse>(GET_POSTS);
// }


// import { gql } from '../../apollo/__generated__';
 
// interface CreatePostResponse {
//   createPost: Post[];
// }
 
// interface CreatePostVariables {
//   input: {
//     title: string;
//     paragraphs: string[];
//   }
// }
 
// const CREATE_POST = gql`
//   mutation initBlockchain($input: any!) {
//     createPost(input: $input) {
//       id,
//       title,
//       paragraphs
//     }
//   }
// `;
 
// export function usePostMutation() {
//   return useMutation<CreatePostResponse, CreatePostVariables>(CREATE_POST);
// }

//const [initBlockchain, { data, loading, error }] = useMutation<MutationRoot, MutationRootInitNewBlockchainArgs>(BlockchainInitiated);
