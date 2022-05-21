import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import './index.css'

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <div className="container">
      <div className="content">
        <h1>Merhaba, Ben Cengiz</h1>
        <p>Bu bir test uygulamasıdır. Gatsby ile kendi çekimlerimi yayınlamayı planlıyorum.</p>
        <div className="photos">
          {data.allFile.edges.map(({ node }) =>{
            return  <Img key={node.id} fluid={node.childImageSharp.fluid} />
          })}
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  {
    allFile(filter: {absolutePath: {regex: "//gallery//"}}) {
      edges {
        node {
          id
          childImageSharp{
            fluid (maxWidth: 3024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage