import { gql } from "@apollo/client";

export const getBlogData = gql`
  {
    blogs {
      id
      title
      thumbnail {
        hash
        url
      }
      featuredImage {
        hash
        url
      }
      content
      slug
    }
  }
`;
