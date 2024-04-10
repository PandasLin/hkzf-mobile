

import { Swiper, Toast } from 'antd-mobile'
import './home.css'

export function Home () {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className='content'
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`)
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ))
  return (
    <div className='homeBox'>
      <Swiper
        loop
        autoplay
        onIndexChange={i => {
          console.log(i, 'onIndexChange1')
        }}
      >
        {items}
      </Swiper>
    </div>
  )
}
