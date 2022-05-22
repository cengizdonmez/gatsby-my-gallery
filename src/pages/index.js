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
        <div className="hero">
          <h1>Merhaba, Ben Cengiz</h1>
          <p>Bu bir test uygulamasıdır. Kendi çekimlerimi yayınlamayı planlıyorum. Bu projede optimize edilmiş görüntüler için gatsby-image plugin kullandık. Resimleri yüklemek için apple kestirmeler kullanarak github api'ye yönlendirdik. Bu sayede telefonumdan istediğim fotoğrafı seçerek bu galeriye yüklemiş olacağız. Fotoğrafları rahat bir şekilde incelemek için tabiki de fancybox'da kullandım.</p>
        </div>
        <Fancybox>
        <div className="photos">
          {data.allFile.edges.map(({ node }) =>{
            return <a 
                    data-sal="zoom-in"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                    data-fancybox="gallery" className="photo" key={node.id} href={node.childImageSharp.fluid.src}>
                    <Img data-fancybox="gallery"  fluid={node.childImageSharp.fluid} />
                   </a>
            })}
        </div>
        </Fancybox>
        <footer>
          <p>Kaynak Adem İlter Dersleri</p>
          <span>2022©</span>
        </footer>
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage
