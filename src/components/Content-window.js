import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAction from '../hooks/useAction'
import Loader from './Loader'
import { selectContentMemo } from '../selectors'

const ContentWindow = () => {
  const { id } = useParams()

  //   console.log('Rerender ' + id)
  //   const { load, content, error } = useSelector((state) => state.content)
  const { load, content } = useSelector(selectContentMemo)

  const { fetchContent } = useAction()

  console.log('Rerender ' + id, content && content.summary, load)

  useEffect(() => {
    fetchContent(id)
  }, [id])

  if (load) {
    return <Loader />
  }

  return content ? content.summary : null
}

export default React.memo(ContentWindow)
