import { Link } from "react-router-dom";
import styles from './Landing.module.css'

export default function Landing(){
    return(
        
        <main >
            <section className={styles.body}>
            <Link to='/home'>
            <button>Vamos a Home</button>
            </Link>
            </section>
        </main>
        
    )
}