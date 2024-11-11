import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Layout  from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import CityPage from "./pages/city-page";
import Weatherdashboard from "./pages/weather-dashboard";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
function App() {
  const queryClient = new QueryClient()

  return (
    <> 
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
        <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Weatherdashboard/>}></Route>
            <Route path="/city/:cityName" element={<CityPage/>}></Route>
          </Routes>
        </Layout>
       </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
  )
}

export default App
