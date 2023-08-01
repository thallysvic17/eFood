import { ListContainer } from "../../GlobalStyles";
import RestaurantModel from "../../Models/RestaurantModel";
import Restaurant from "../Restaurant";


type Props = {
  restaurants : RestaurantModel[] 
}


const RestaurantList = ({restaurants}:Props) => (
  <ListContainer>
    {restaurants.map((item) => {
      return (
        <Restaurant
          key={item.id}
          imgHeader={item.imgHeader}
          tags={item.tags}
          title={item.title}
          note={item.note}
          description={item.description}
        />
      );
    })}
  </ListContainer>
);

export default RestaurantList;
