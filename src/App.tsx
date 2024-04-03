import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Container } from '@mui/material';
import AppContextProvider from './context/AppContext';
import { Header, Footer, TagsView } from './components/organisms';
import { Alert } from './components/molecules';
import { ViewWrapper, FullView } from './common';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <FullView>
          <Container>
            <Header />
            <ViewWrapper>
              <TagsView />
              <Alert />
            </ViewWrapper>
          </Container>
          <Footer />
        </FullView>
      </AppContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default App;
