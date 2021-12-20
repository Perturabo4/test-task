import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import useAction from '../hooks/useAction'
import Loader from './Loader'
import ErrorMessage from './Error-message'
import { selectContentMemo } from '../selectors'

const ContentWindow = () => {
  const { id } = useParams()

  const { load, content, error } = useSelector(selectContentMemo)

  const { fetchContent } = useAction()

  useEffect(() => {
    fetchContent(id)
  }, [id])

  if (load) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage text={error} />
  }

  return content ? (
    <>
      <Typography
        variant='h3'
        component='h2'
        align='center'
        style={{ marginBottom: '30px' }}
      >
        {content.title}
      </Typography>
      <div>
        <img
          src={content.imageUrl}
          alt='IMG'
          width='300'
          height='300'
          style={{ float: 'left', paddingRight: '10px' }}
        />
        <Typography paragraph={true}>{content.summary}</Typography>
      </div>
    </>
  ) : null
}

export default React.memo(ContentWindow)
