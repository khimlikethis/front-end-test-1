import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";

const getData = async () => {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
          emojiU
          continent {
            code
          }
        }
      }
      `,
  });

  return data.countries
}

export default getData;