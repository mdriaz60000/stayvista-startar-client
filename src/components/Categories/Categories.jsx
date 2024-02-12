import { useSearchParams } from "react-router-dom";

import CategoriesBox from "./CategoriesBox";
import { categories } from "./categoriesData";
import Container from "../Shared/Container";


const Categories = () => {

    const [params ] = useSearchParams()
    const category = params.get('category')
    console.log(category)

    return (
       <Container>
         <div className="pt-4 flex items-center justify-between overflow-x-auto">
            {
                categories?.map(item =><CategoriesBox  key={item.label} label={item.label} icon={item.icon} selected={category === item.label}></CategoriesBox>)
            }
        </div>
       </Container>
    );
};

export default Categories;