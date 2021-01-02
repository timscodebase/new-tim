import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: 'https://kod60sys.api.sanity.io/v1/graphql/production/default',
      cache: new InMemoryCache().restore(initialState || {}),
    }),
  {
    render: ({ Page, props }) => (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    ),
  }
)
