import React from "react"
import styles from "./Slider.module.css"
import Button from "./Button"
// import cx from 'clsx';
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import fashionImg from "../assets/carousel/fashion.jpeg"
import digitalImg from "../assets/carousel/digital.jpeg"
import foodImg from "../assets/carousel/food.jpeg"
import { Link } from "react-router-dom"


interface Props {
  img: string;
  title: string;
  content: string;
}

function Slide ({ img, title, content }: Props) {
  return (
    <>
      <img src={img} className={styles.img} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.content}>{content}</p>
      </div>
      </>
  )
}

export default function Slider () {
  return (
    <Carousel showStatus={false} showThumbs={false} className={styles.mainSlide} autoPlay infiniteLoop={true}>
      <div className={styles.slideContainer}>
        <div className={styles.slideBox}>
        <Slide 
          img={fashionImg}
          title={'물빠진 청바지!'}
          content={'이제 막 도착한 패션 청바지를 구경해 보세요.'}
        />
        <Link to='/fashion'>
          <Button style={{position: 'absolute', textAlign: 'justify', top: '57%', left: '8%'}}>
            바로가기 
            <div className={styles.rightPointer}>
              &#8594;
            </div>
          </Button>
        </Link>
        </div>
      </div>

      <div>
        <Slide 
          img={digitalImg}
          title={'신속한 업무처리!'}
          content={'다양한 디지털 상품을 둘러보세요.'}
        />
        <Link to='/digital'>
          <Button style={{position: 'absolute', textAlign: 'justify', top: '57%', left: '8%'}}>
            바로가기 
            <div className={styles.rightPointer}>
              &#8594;
            </div>
          </Button>
        </Link>
      </div>
      <div>
        <Slide 
          img={foodImg}
          title={'신선한 식품!'}
          content={'농장 직배송으로 더욱 신선한 식료품을 만나보세요.'}
        />
        <Link to='/food'>
          <Button style={{position: 'absolute', textAlign: 'justify', top: '57%', left: '8%'}}>
            바로가기 
            <div className={styles.rightPointer}>
              &#8594;
            </div>
          </Button>
        </Link>
      </div>
    </Carousel>
  )
}

