import type { GetStaticProps, NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import imageLoader from '../imageLoader'

// import {
//   Head,
//   Image,
//   Link
// } from 'next'

import styles from '../styles/Home.module.scss'
import {Character, GetCharacterResults } from '../types'

import {
  map
} from '../public/js/helpers'

// Fetch the Figma variables
import '../public/js/fetch-figma-variables.js'

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>USE Design System</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {JSON.stringify(characters)} */}
      {/* {characters.map((character) => {
        return (
          <div key={character.id}>
            {character.name}
            <Image
              loader={imageLoader}
              unoptimized
              src={character.image}
              alt={character.name}
              width="200"
              height="200"
            /> 
          </div>
        )
      })} */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://use.as" target="_blank" rel="noreferrer">USE</a> Design System
        </h1>

        <Link href="/typography">
          <a>Typography</a>
        </Link>
      </main>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://use.as">USE's</a> Design System
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2 className="test-text">Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const { results }: GetCharacterResults = await res.json()

  return {
    props: {
      characters: results
    }
  }
}

export default Home
