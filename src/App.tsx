import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// import { AppContextProvider } from '@/utils/context/AppContext';
// import ErrorFallback from '@/pages/error/ErrorFallback';
import theme from '@/theme';

import AppRoutes from './routes/AppRoutes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0, // Default retry 0
    },
  },
});

const App = () => {
  return (
    // <AppContextProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline>
          {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
          <AppRoutes />
          {/* </LocalizationProvider> */}
          {/* </ErrorBoundary> */}
        </CssBaseline>
      </ThemeProvider>
    </QueryClientProvider>
    // </AppContextProvider>
  );
};

export default App;
