import { CountryDetails } from "@/app/types/types";
import Link from "next/link";

const CountryName = ({params}:{params:{country_name:string}}) => {
    const countryDetails: CountryDetails[] = [
        {
            name:"Japan",
            capital:"Tokyo",
            population:123753000,
        },
        {
            name:"Mexico",
            capital:"Mexico City",
            population:130861000,
        },
        {
            name:"Indonesia",
            capital:"Jakarta",
            population:283488000,
        },
        {
            name:"India",
            capital:"New Delhi",
            population:1450940000,
        },
        {
            name:"China",
            capital:"Beijing",
            population:1419320000,
        },
    ];

    const country = countryDetails.find((c)=>c.name.toLowerCase()===params.country_name.toLowerCase());

    if(!country){
        return(
            <h1>Country Not Found</h1>
        );
    }

    return (
        <div>
            <h1>COUNTRY DETAILS</h1>
            <ul>
            <li><h4>Name:{country.name}.</h4></li>
            <li><h4>Population:{country.population}.</h4></li>
            <li><h4>Capital:{country.capital}.</h4></li>
            </ul>
            <br></br>
            <Link href={"/country"}>Back</Link>
        </div>
    );
};

export default CountryName;