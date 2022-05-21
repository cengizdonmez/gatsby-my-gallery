import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import './index.css'
import Fancybox from "../fancybox"

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <div className="container">
      <div className="content">
        <h1>Merhaba, Ben Cengiz</h1>
        <p>Bu bir test uygulamasıdır. Gatsby ile kendi çekimlerimi yayınlamayı planlıyorum.</p>
        <Fancybox>
        <div className="photos">
          {data.allFile.edges.map(({ node }) =>{
            return <a data-fancybox="gallery" className="photo" key={node.id} href={node.childImageSharp.fluid.src}>
                    <Img data-fancybox="gallery"  fluid={node.childImageSharp.fluid} />
                   </a>
            })}
        </div>
        </Fancybox>
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
