import { Link } from "react-router-dom";


export default function Landing(){
    return(
        <main>
            <section>
            <Link to='/home'>
            <button>Vamos a Home</button>
            </Link>
            </section>
        </main>
    )
}