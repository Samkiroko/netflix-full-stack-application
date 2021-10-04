import React from 'react'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/featuredInfo/FeatureInfo'
import './home.css'
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const MONTHS = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], [])
  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats/', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTU4Zjk4MGE2MjJlMzU4ZjdlNTNmNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMyNjc4NDgsImV4cCI6MTYzMzY5OTg0OH0.3mQpS8ygEVsyKshy-DFdKGelFBonzwCNzZUy559CDL8',
          },
        })
        res.data.map((item) =>
          setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], 'New User': item.total }]),
        )
      } catch (err) {
        console.log(err)
      }
    }
    getStats()
  }, [MONTHS])

  return (
    <div className='home'>
      <FeatureInfo />
      <Chart data={userStats} title='User Analytics' grid dataKey='New User' />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
