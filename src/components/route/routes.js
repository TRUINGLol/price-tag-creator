import Introduce from "../../pages/Introduce";
import NotFound from "../../pages/NotFound";
import Select1 from "../../pages/Select1";
import Select2 from "../../pages/Select2";
import Select3 from "../../pages/Select3";
import MoreTags from "../../pages/MoreTags";

export const PublicRoute = [
    {path:'/introduce', element:<Introduce/>},
    {path:'/404NotFound', element:<NotFound/>},
    {path:'/select1', element:<Select1/>},
    {path:'/select2', element:<Select2/>},
    {path:'/select3', element:<Select3/>},
    {path:'/moreTags', element:<MoreTags/>}
];