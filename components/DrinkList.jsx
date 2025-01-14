import Link from "next/link";
import Image from "next/image";

const DrinkList = ({ drinks }) => {
  console.log(drinks)
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-width: 768px) 100vw , (max-width:1200px) 50vw"
                  className="rounded-md object-cover"
                />
              </div>

              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinkList;
