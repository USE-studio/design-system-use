import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../imageLoader'
import styles from '../styles/Home.module.scss'
import {Character, GetCharacterResults } from '../types'

// Child components
import Header from '../components/Header'
import Table from '../components/Table'

import taxonomy from '../public/images/taxonomy.png'

import {
  map
} from '../public/js/helpers'

// Fetch the Figma variables
import '../public/js/fetch-figma-variables.js'

const Typography: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>USE Design System – Typography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      <div className={styles.containerouter}>
        <div className={styles.containerinner}>
          
          <Image
            className="image-typography"
            loader={imageLoader}
            src={taxonomy}
            width={828}
            height={202}
          />
          {/* <div className="image-wrapper">
          </div> */}

          <Table />
        </div>
      </div>

      {/* <h1>Typography</h1> */}

    </div>
  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch('https://rickandmortyapi.com/api/character')
//   const { results }: GetCharacterResults = await res.json()

//   return {
//     props: {
//       characters: results
//     }
//   }
// }

export default Typography
