import React from 'react'
import styled from 'styled-components'
import { Map } from 'immutable'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 300px;
  padding: 1em;
  margin: 1em auto;
`
const Item = styled.li`
  background: #eee;
  padding: 4px 12px;
  :hover {
    a {
      color: #eee;
    }
    background: #f1320e;
  }
`

const REPO_COUNT = 10
const SearchResults = ({ repos }) => {
  return (
    <Container>
      <h2>Top { REPO_COUNT } { repos['lang']} repos</h2>
      <small>{ repos['totalCount']} repos found</small>
      <ul>
        {
          repos['items'].map(item => (
            <Item key={item['id']}>
              <a href={item['htmlUrl']} target='_blank'>
                { item['name'] }
              </a>
            </Item>
          ))
        }
      </ul>
    </Container>
  )
}

SearchResults.propTypes = {
  repos: PropTypes.object.isRequired
}

export default SearchResults