import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://ericanfly.com/wp-content/uploads/2020/04/saramin-logo-1024x300.jpg"
  },
  {
    url:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAwFBMVEX///9LS0tv2kRGRkY/Pz9DQ0M8PDxFRUU4ODg1NTU9PT1t2kFl2DNj2DBq2TwzMzPGxsba2trU1NT19fWurq58fHyWlpbt7e10dHS8vLzj4+OGhoa2trb5+floaGhTU1OdnZ1eXl7i99yOjo7r+eeH32e67KrLy8vb9dOc5ITo+OOj5o3U88p53FKnp6eAgID0/PGT4njF77i06qOs6JkqKirN8cHA7bJ1203W882B3l5sbGyO4XGX431b1iCA3ly3in9QAAAMdklEQVR4nO2cd1fiTBSHAykkpgACgki3IHbFVXct+/2/1QvJlDstJOC77nruc45/mGRC5sfMbTPBshAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQT6Rbr/fTNlvffWj/It06l7Gj8ZXP8q/yFGtkrGH8m0ByrcTKN9OMPkclG8LjlG+XUD5dgLl2wmUbye4fIdf/Sj/IijfThygfLtw4KJ8O/A58s3OCMvl41B7xWXKYsX72Q4f9LfxOfI9fUQJ4eNOe0WYMKIdPuhv45Pki6qUWC9fNWRXROc7fNJfxhfIl1zu8El/GVy+wQ532SzfC5ev+o1m75fId7XDR/1dfIV8yX3Ore7On57Pzh6uLnZ4nGJ0Dw9eK57vOdOjdnPLe3yOfFel5DNdY1k/L6txFEXJ6i+OT89OpNPdlP4K6cRwP2M+lxa8hocZg4HUvWF7GjiunXbdrrne3rFWwdvbzppeb9SlDRuTzmg0Gmf/TUzyjQI/48e+oa8AKJ/c5wxBvkQf+i2TKAGXhVF8Kk7zXp0+kxRcHv4gC151qReNupPhH8HDw4PAsSsCtWCk6ahdszPqmXzNTn3PTf/Pzhvlm9Lbe/JXraGkfGFVc8VZnFRlwvgaRjmHDl1ZmIttWeZud8QTfHLBgtLAdysqdtBTFmvZSX8tX6sX0A8KsvNG+Tyh4QY2y3cN5dM4j5PrSBEvE3DBL2oFdKgci63HrJuO4USdKzMcsb5J1Hy5aifIN/dr7P8N8vV99sH5yqWUlS88lW8Qh4pydKZX+R1HdErYQmsm66qbwlzp0hP2iPfM5SIoBAficzH5V/K16/DCfPna9Lg9/R/kq8aiY334MImXDkA2gdlTiSrN91i3xG6w2e7e0ENNLrUOT7CRQL7WQGioyNfWt3Ol70PLz7LyJe+F1Vvx8ZNcyOYEl0PohGz8mE30qF/t56u3MquCflwGUb0N8jWYefAkK/058gmXnW9Qb3X1jFzKVBrBm4+AF/XgCXacmsQWH6cmPPjNcKMqOZtgmCcffx6/gHoF5PstyZdwj3CndxqQMCGRIvOkAXSScGD4IH5jg7VGh9RUCFdsx/P9wPdEaeoggBlXDBD5brTy3bIbyj7us+QD152qAYtCQnzNPp0VMBBpQk8K+zGgpo/WQ24ccKUbdA77q2+huz8Ze1DWWp58ruc7rlur58g34c8TFIj6tpKPWb+nWDqxSjjiWAig17d9yK5WxpMFHEo6ooDxu2VRWjZWu8B32v4ExN77UzCrgbmX5fPG7SYM2Zl8LpfvgAUtFbtXRD3rvLx8zPmKYy9KHs/v1pnvshqJoaKkCAjwOsKMBMaPjjUaPXR4yOKMpBC5DSxAnYW6onw1W44LVfm6I0d3o8Ly6XP9X4p84Vt64gxavjAG6dxTCJWNlulBFop43MaJUTA/0ZT8dJ8PPk+1ScAEcIs1hXd21LEky9c/DsB36UwKqbeVfNUsnBPUS8TG9/BkNvxaVAIeulAHYUvjgE9qougxm+SOGN2J96kwxyC6GvdWbcPkqx3PG4ODsQ9DcntcTL3t5AtfLKHUtVJInvgLcDZ6Sg/RIIWH82RA1kiQx+1Nj6Xt2f9MHjHsYTTYBSz4BvJpG91wH7vnOFJwUyTdTdlKvmr0LB6PfyrNTvlpMtnZAwf04cgeO685JU9NGzM3kw2bOZudgaFfzDbar+QIkE/b6EZXeyDUCxcRN8t3qstp47s74HZBKMiA5+P0CJtibHGGdo/GsNT48SAnu5LFjMZEiqXIbPZy+dyJrkXbLF+9SL6RAeWbaa/Qype8P4DZqS2iLrn7ICt0tEO1jtDn1WQmqS81fvI4ZVKYBh/w6x4Jnbl8gfbNA6N8tl+gTEopN/rAotsL0FK7AAeGX5R5ZTaIiEVrOHR0DImQxPixVI5YcOp02MxUYbUHavx4iUffyCSfMy5q99aUGX3JpXYkFmmYdZHOSTJCiJzr3JyMlSydH9KZSKZdl836tvaDxDZkfjP5XH2jNkxjgHpF6iycUvItZlKekQ3JF/2t+ewlvoN5BCIL1WxoicZPlrkp/a+FhsnE23D55Po2QS9fwWSDMePyRRvle9cawuRRf2se2YS/syMdYVIOmeljziILCVkxhHhiJmdePEHvrRgAT+9GDaPPK7futlm+NyjfhaZCFalRSwqvxIbX2RGWeKQugEo2sbiUqZ2iVp8mwYXkoy8aUFNXXD5biPrM3klHSfmshVpkMS1ePiijj5XmU/tO/Gs2uUbc+IlXWSCOyZPvVhp9r0XlszuN9pinHIVq9IySk9caqtbPtHPjkds+ukAyhX0kqUUWVxAt19atIYzRFX0vXwnh1rSgs0k+VhJLRz8IsoumuykXILzQ78B4Aa5j9e+zXCKlfkHht9hwDQ/oLOpIyLcNjB+r09PEs8U8b45hktxSSfm6sGpTYuMCiM6SpfYKcEHqI+TifWTYNHmiuTNLPFbBStMTukvEfOVlfZ5i0FbyWjBATlRKymcd8qpDpWL8FBU+mKiFEgFLcetMdzXdpelriHesS5B1sHHNgrED+vw0riDdrfOBwMMUVkHw9RtgLfCKGl3JKymfdcT9h65AYwJk/tq0g3sOmns9itPXYPpOYM7LnAvbz16haRZNqdo08mPuma/V6NclIHy9eI8cKSufNQarRMXflOEGXmvFZkrmL23bqIb6IjX4WkBcDWIQssmHOjo6l9vU9IEIltfzXEMvWMrLlgJ4zUsfa3P5iI0AJdmKV/gF/Z8w9X9STgOpmP+8EKdv/Ky5Laz3QaPKSlFEJW7gPCIaTR+gn+CLtrpqKaz3sdXZ0vJZA7DSoS8r6oBTUbFjbyDMi5hMS2n6nioDcCHcFZxmiQcZLvxlZNJfNoXgdgQe4/o65wuqzbZ0uxLyWR1u/oQl41wuYSAci8GLsBIJdt5XRe8bxgtBwJPfQiEf2oRDKVfi1SQliwKthqAar+7k7vOW3Dhuku9QlY9vK1q5sELrlJY8FeMFF0lc8YG7M5TYOYlPH2jD2ULcNRTDnWotaasFX1To+8IJsTIKlnmDidSBBmjIbeM28jW5+Su82iFM0LUQ70+roXQ3W76I640ffIDpCi9hFIdvl4+P96G02y8RHZK4WwCKJI4+aYsJXAWbQkG6PaCex4fmNvJZbb5m5xbaZbDiRCoD6Fe7YUH+Qc48qITrd2fkg1JKLK4xwN9huBW2nwViiDcHo9b2p4Msn2s1OnB5sQYqo1vJZ/XAPsCiJftHgxoCMLy7LLA5g6kn+WVxjsJC+gAOP6VGfCCcdfy96evIljbq7oG7dbaSbwi+XMcYo0vIeZhOhaty11PUvfhCh6GFEYRVA+SRtDfStqU9zmKyWli+mmBk97n5qxUtnd6Zd4gSIqEkqqs5G9RTE8FjIIP46HBa+6rnm+bsLU3VE3KF4vKJRm7Ct8wULp1qi/BQPWFP5HmRyZ6pd61+1hzszBB/R+AI6GOrDa1pztKsrB6QT2/DTPLBLYeFS6fnueMvEmcg3NySO2yjX7rPAnNUfD4QE+p313XE2AZiy6ntJvkaJvnAPszipdML1WUyYmkh8h2kyYZt9ek5uZ3cMdH0gRU14y8jDQLDBPZe5Sz1dlv5oJMvUTo9NUzgRMmE+ZALf1lnsUHAKDSsgfBBJj85GJYGr9ftBbLDWPdS81IpC4MMK21m+aCTL1E6fYo0QoTxvbyUASus6/G1fqVIaRbF+uKrBSu7njTGjh3yJpBrTtmbvborKFjzbF0Zq+M7jrO34odBvvR1Jt/362oVYlr3/SCjXjR6sVQhwiR+U4uhoEZD9k5d3a+j7JC1iuJrXRWGPV1lnDKtSKZ5PuqldHp5ryh3b6aB57i1Ws1193z3WC/PfiNj3tDb/1azT9Ccb7VaQ0rOkyhcva/zjSRZ5w8rEZa6Wh7YvMILrOfL+2qcUX1/1pcAP4/h/mByfHR0cNMomtn/MWYPj4v7t/fLsyvDAiSoP8fimbuTixPTK5cIAfhd+Q0tZCMn8tIbUoYnxXMgJQBrS4ZXGZAcwCarb/TDGn8MbvqM2zMQIxcbd3UgOUDP8X1+1eWPAQr1xl8lQYyANwTDr36WfxBg+vJ+UgjRAnajGn4SB8kBbC79Tr/m96dYoOfYBb5hzfQ2DGIGbKzXvUaJ5HMu73RGynAG9nsbtoQjZt7i9PcN13x89bP8g8wyLmYXF///b2wiCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCPKN+Q/HU/Wi9SOc1gAAAABJRU5ErkJggg=="
  },
  //Second image url
  {
    url:
      "data:image/png;base64,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"
  },
  //Third image url
  {
    url:
      "data:image/png;base64,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"
  },

  //Fourth image url

  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Logo_IT_Park_Uzbekistan.svg/2560px-Logo_IT_Park_Uzbekistan.svg.png"
  },
  {
    url:
"https://i.ebayimg.com/images/g/rP4AAOSwiMRbDbgM/s-l1200.webp"
  },
  {
    url:
    "data:image/jpeg;base64,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"
  }

];
const Slider = () => {
  return (
    <div className="parent" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <h1 style={{textAlign:"center"}}>Search for international jobs with <span style={{ color: "#4348DB" }}>Jobify</span> </h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;