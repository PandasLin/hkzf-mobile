import './App.css';
import React, { useState } from 'react'
import { TabBar } from 'antd-mobile'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CityList } from './pages/CityList';
import { Home } from './pages/Home';
import { Mine } from './pages/Mine';
import { News } from './pages/News';
import { NotFound } from './components/notFound'

export const withNavigation = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
};

function App() {
  const navigate = useNavigate();
  let location = useLocation();
  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <i className='iconfont icon-shouye'></i>
    },
    {
      key: '/cityList',
      title: '找房',
      icon: <i className='iconfont icon-sousuo'></i>
    },
    {
      key: '/news',
      title: '资讯',
      icon: <i className='iconfont icon-zixun'></i>
    },
    {
      key: '/Mine',
      title: '我的',
      icon: <i className='iconfont icon-wode'></i>
    },
  ]
  const [state, setState] = useState({
    activeKey: location.pathname
  })
  const setActiveKey = (key) => {
    setState({
      activeKey: key
    });
    navigate(key);
  }
  return (
    <div className='homeClass'>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cityList" element={<CityList />} />
      <Route path="/news" element={<News />} />
      <Route path="/mine" element={<Mine />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <TabBar activeKey={state.activeKey} onChange={setActiveKey}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
    </div>
  );
}

export default withNavigation(App);
