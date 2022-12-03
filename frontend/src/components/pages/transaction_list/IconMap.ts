// @ts-ignore
import { ReactComponent as FoodIcon } from "../../../assets/utensils-solid.svg";
// @ts-ignore
import { ReactComponent as PetrolIcon } from "../../../assets/gas-pump-solid.svg";
// @ts-ignore
import { ReactComponent as MoneyIcon } from "../../../assets/sack-dollar-solid.svg";
import { TransactionCategories } from "../../../types/types";

const IconMap = new Map()
IconMap.set(TransactionCategories.food, FoodIcon)
IconMap.set(TransactionCategories.salary, MoneyIcon)
IconMap.set(TransactionCategories.petrol, PetrolIcon)

export { IconMap }