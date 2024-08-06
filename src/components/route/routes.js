import Introduce from "../../pages/Introduce";
import NotFound from "../../pages/NotFound";
import Select1 from "../../pages/Select1";
import Select2 from "../../pages/Select2";
import MoreTags from "../../pages/MoreTags";

export const PublicRoute = [
    {path:'/introduce', element:<Introduce/>},
    {path:'/404NotFound', element:<NotFound/>},
    {path:'/select1', element:<Select1/>},
    {path:'/select2', element:<Select2/>},
    {path:'/moreTags', element:<MoreTags/>}
];