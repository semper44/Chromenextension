import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainProvider from './common/provider/MainProvider.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Buffer } from 'buffer'
// globalThis.Buffer = Buffer

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     {/* <ToastContainer> */}
        <MainProvider/>
     {/* </ToastContainer> */}
     </QueryClientProvider>
  </React.StrictMode>
)
