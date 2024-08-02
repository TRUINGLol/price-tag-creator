import Introduce from "../../pages/Introduce";
import NotFound from "../../pages/NotFound";
import Select1 from "../../pages/Select1";

export const PublicRoute = [
    {path:'/introduce', element:<Introduce/>},
    {path:'/404NotFound', element:<NotFound/>},
    {path:'/select1', element:<Select1/>}
];