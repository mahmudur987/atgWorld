import { RouterProvider } from "react-router-dom";

import route from "./routes/routes";

function App() {
  return (
    <div className="w-100">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
