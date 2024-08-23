import { ApolloProvider } from '@apollo/client';
import client from './config/apollo';
import AuthProvider from './contexts/AuthContext';
import MainStack from './navigators/MainStack';

export default function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <MainStack />
      </ApolloProvider>
    </AuthProvider>
  );
}
