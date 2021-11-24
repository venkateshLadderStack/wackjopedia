import { gql } from "@apollo/client";

export const getHeaderData = gql`
  query {
    navbar {
      links {
        id
        name
        url
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
          name
          id
          url
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
        name
        url
      }
    }
  }
`;
