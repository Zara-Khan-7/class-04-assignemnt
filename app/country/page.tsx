import Link from "next/link"

const Country = () => {
  return(
    <div>
      <h1>LIST OF COUNTRIES 📃</h1>
      <ul>
        <li><Link href={"/country/japan"}>Japan 🎎</Link></li><br></br>
        <li><Link href={"/country/mexico"}>Mexico 🎃</Link></li><br></br>
        <li><Link href={"/country/indonesia"}>Indonesia 🥋</Link></li><br></br>
        <li><Link href={"/country/india"}>India 🎆</Link></li><br></br>
        <li><Link href={"/country/china"}>China 🎐</Link></li><br></br>
      </ul>
    </div>
  )
}
export default Country;