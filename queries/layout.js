import { gql } from "@apollo/client";

export const getHeaderData = gql`
  query {
    navbar {
      links {
        id
        title
        slug
      }
      logo {
        alternativeText
        url
      }
    }
  }
`;

export const getFooterData = gql`
  query {
    footer {
      footer_columns {
        footer_links {
          title
          id
          slug
        }
        id
        title
      }
      copyright
      id
      logo {
        alternativeText
        url
        hash
      }
      page_links {
        id
        title
        slug
      }
    }
  }
`;
