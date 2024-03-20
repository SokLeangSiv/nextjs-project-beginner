import DrinkList from "@/components/DrinkList";
import loadingForMe from "./loading";

const fetchDrinks = async () => {

  await new Promise(resolve => setTimeout(resolve, 1000));

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  const response = await fetch(url);
  
  //throw error message

  if (!response.ok) {
    throw new Error('Fail to fetch data');
  }
  const data = await response.json();
  return data;
}

const DrinkPage = async () => {

  const data = await fetchDrinks();

  // console.log(data);

  return (
    <div>DrinkPage
      <DrinkList drinks={data.drinks}/>
    </div>
  )
}

export default DrinkPage