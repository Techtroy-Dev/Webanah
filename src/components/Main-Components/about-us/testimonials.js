/** @jsx jsx */

import { jsx, css } from "@emotion/react"
import { Leaf } from "@emotion-icons/fa-solid"

const base = css`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
  */
  
  @media (min-width: 1281px) {
    
    /* CSS */
    gap: 2rem;
    flex-direction: row;
    
  }
  
  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
  
  @media (min-width: 1025px) and (max-width: 1280px) {
    
    /* CSS */
    
  }
  
  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */
  
  @media (min-width: 768px) and (max-width: 1024px) {
    
    /* CSS */
    gap: 1rem;
    
  }
  
  /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
    /* CSS */
    
  }
  
  /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  
  @media (min-width: 481px) and (max-width: 767px) {
    
    /* CSS */
    
  }
  
  /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  
  @media (min-width: 320px) and (max-width: 480px) {
    
    /* CSS */
    padding: 0 0.5rem;
    
  }
  > div {
      border: 0.01rem solid grey;
      border-radius: 0.25rem;
      &:hover {
        border: 0.01rem solid #16f533;
      }
      & > div {
          padding: 1rem;
          @media (max-width: 1200px) {
              padding: 0 0.25rem;
          }
      }
      div:nth-of-type(1) {
          font-family: 'Green Lantern';
          font-size: 1.25rem;
          font-size: clamp(0.9rem, -0.875rem + 8.333vw, 1.25rem);
          ${'' /* text-align: center; */}
          color: #16f533;
          opacity: 0.75;
      }
      div:nth-of-type(2) {
          font-size: clamp(0.5rem, -0.875rem + 8.333vw, 0.9rem);
      }
      div:nth-of-type(3) {
          font-size: clamp(0.8rem, -0.875rem + 8.333vw, 1.2rem);
          font-weight: bold;
      }
  }
`

const Testimonials = () => (
  <div
    css={base}>
    <div>
      <div>
        "THEY HAVE THE BEST MARKETING TEAM"
            </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem nibh, congue a risus sit amet, rhoncus iaculis nulla. Ut cursus sollicitudin odio quis pharetra. Nam diam arcu, consectetur eu dapibus sit amet, laoreet efficitur magna. Interdum et malesuada fames.
            </div>
      <div>
        <Leaf size={32} color="green"
          css={css`
                  padding-right: 0.5rem;
                `}
        />
                Company Name
            </div>
    </div>
    <div>
      <div>
        "THEY HAVE THE BEST MARKETING TEAM"
            </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem nibh, congue a risus sit amet, rhoncus iaculis nulla. Ut cursus sollicitudin odio quis pharetra. Nam diam arcu, consectetur eu dapibus sit amet, laoreet efficitur magna. Interdum et malesuada fames.
            </div>
      <div>
        <Leaf size={32} color="green"
          css={css`
                      padding-right: 0.5rem;
                `}
        />
                Company Name
            </div>
    </div>
    <div>
      <div>
        "THEY HAVE THE BEST MARKETING TEAM"
            </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem nibh, congue a risus sit amet, rhoncus iaculis nulla. Ut cursus sollicitudin odio quis pharetra. Nam diam arcu, consectetur eu dapibus sit amet, laoreet efficitur magna. Interdum et malesuada fames.
            </div>
      <div>
        <Leaf size={32} color="green"
          css={css`
                      padding-right: 0.5rem;
                `}
        />
                Company Name
            </div>
    </div>
  </div>
)

export default Testimonials;