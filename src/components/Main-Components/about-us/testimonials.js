/** @jsx jsx */

import { jsx, css } from "@emotion/react"
import { Leaf } from "@emotion-icons/fa-solid"

const base = css`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
  */
  
  @media (min-width: 1281px) {
    
    /* CSS */
    gap: 1rem;
    flex-direction: row;
    
  }
  
  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
  
  @media (min-width: 1025px) and (max-width: 1280px) {
    
    /* CSS */
    flex-direction: row;
    
  }
  
  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
      flex-direction: row;
     }
  
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
    padding: 0 1.5rem;
    
  }
  
  /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  
  @media (min-width: 320px) and (max-width: 480px) {
    
    /* CSS */
    padding: 0 1.5rem;
    
  }
  & > div {
      background-image: url('/images/core-value-bg.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border: 0.01rem solid grey;
      border-radius: 0.25rem;
      
      border-left: 0.2rem solid grey;
      border-right: 0.2rem solid grey;
      &:hover {
        color: #f8f8ff;
        border-left: 0.2rem solid #16f533;
        border-right: 0.2rem solid #16f533;
      }
      
      & > div {
          padding: 1rem;
          @media (max-width: 1200px) {
              padding: 0.25rem 0.5rem;
          }
      }
      div:nth-of-type(1) {
          font-family: 'Green Lantern';
          font-size: 1.25rem;
          font-size: clamp(1rem, -0.875rem + 8.333vw, 1.25rem);
          ${'' /* text-align: center; */}
          color: #16f533;
          opacity: 0.75;
      }
      div:nth-of-type(2) {
          font-size: clamp(1rem, -0.875rem + 8.333vw, 0.9rem);
      }
      div:nth-of-type(3) {
          font-size: clamp(1rem, -0.875rem + 8.333vw, 1.2rem);
          font-weight: bold;
      }
  }
`

const Testimonials = () => (
  <>
    <div
      css={css`
              font-family: 'Green Lantern';
              font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.75rem);
              text-align: center;
              color: transparent;
              -webkit-text-stroke: 0.06rem #16f533;
              letter-spacing: 0.25rem;

              margin-bottom: 0.75rem;
              `}
    >
      Testimonials
        </div>
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
  </>
)

export default Testimonials;