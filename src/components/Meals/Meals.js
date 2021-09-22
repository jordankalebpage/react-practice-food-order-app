import MealsSummary from "./MealsSummary";
import {Fragment} from "react";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    );
};

export default Meals;
