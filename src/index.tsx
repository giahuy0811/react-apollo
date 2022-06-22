import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cache= new InMemoryCache({
})

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache,
});

root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

