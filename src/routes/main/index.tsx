import { setDoc, collection, addDoc, getDocs, query, DocumentData } from 'firebase/firestore'
import { firebaseAuthService, firebaseDB } from 'firebaseContainer'
import { FormEvent, useEffect, useState } from 'react'

import { ITweets } from 'types/type'

const Main = () => {
  const [text, setText] = useState('')
  const [deleteText, setDeleteText] = useState(false)
  const [tweetsList, setTweetsList] = useState<DocumentData[]>([
    {
      writer: '',
      text: '',
      createAt: new Date(),
    },
  ])

  const handleTextChange = (e: FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }
  const handleTextSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addDoc(collection(firebaseDB, 'tweets'), {
      writer: firebaseAuthService.currentUser?.uid,
      text,
      createAt: new Date(),
    })
    setText('')
  }

  useEffect(() => {
    const settingTweetsList = async () => {
      const collectionQuery = query(collection(firebaseDB, 'tweets'))
      const tweetsDocs = await getDocs(collectionQuery)
      tweetsDocs.forEach((tweets) => setTweetsList((prevTweets) => [tweets.data(), ...prevTweets]))
    }
    settingTweetsList()
  }, [])

  return (
    <>
      <form onSubmit={handleTextSubmit}>
        <input type='text' value={text} onChange={handleTextChange} />
        <input type='submit' />
      </form>
      <ul>
        {tweetsList.map((tweets, index) => {
          const tweetKey = `tweet-${index}`
          return (
            <li key={tweetKey}>
              <div>{tweets.text}</div>
              {tweets.writer === firebaseAuthService.currentUser?.uid && <button type='button'>Delete</button>}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Main
