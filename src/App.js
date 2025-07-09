import { Route, BrowserRouter, Routes } from "react-router";
import { publicRoutes } from "./routes/routes";
import MainLayout from './layouts';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {

              const Page = route.component;
              let Layout = MainLayout;

              if (route.layout) {
                Layout = route.layout
              }

              return (
                <Route key={index} path={route.path}
                  element={
                    <Layout><Page /></Layout>
                  }
                />
              )

            })
          }
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
