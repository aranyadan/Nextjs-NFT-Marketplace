import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    // Index the events off-chain and read from database
    // Setup a server to listen for those events to be fired, and we will add them to a database to query

    // Moralis does this centralized, thegraph does it decentralized
    return <div className={styles.container}>Hi!</div>
}
