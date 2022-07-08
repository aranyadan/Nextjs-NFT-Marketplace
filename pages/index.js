import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery } from "react-moralis"

export default function Home() {
    // Index the events off-chain and read from database
    // Setup a server to listen for those events to be fired, and we will add them to a database to query
    const { data: listedNfts, isFetching: fetchingListedNfts } =
        useMoralisQuery(
            // Table Name
            "ActiveItem",
            // Function for query
            (query) => query.limit(10).descending("tokenId")
        )

    console.log(listedNfts)

    // Moralis does this centralized, thegraph does it decentralized
    return (
        <div className={styles.container}>
            {fetchingListedNfts ? (
                <div>Loading...</div>
            ) : (
                listedNfts.map((nft) => {
                    console.log(nft.attributes)
                    const {
                        price,
                        nftAddress,
                        tokenId,
                        marketplaceAddress,
                        seller,
                    } = nft.attributes
                    return (
                        <div>
                            Price: {price}. NftAddress: {nftAddress}. TokenId:{" "}
                            {tokenId}. Seller: {seller}
                        </div>
                    )
                })
            )}
        </div>
    )
}
