import React, { Component } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { Layout, Menu, Button, Drawer } from 'antd';
import { routes } from '../constants/route';
import fetcher from '../helpers/fetcher';
import { getImageUrl } from '../utils/image-url';
import {
  CaretDownOutlined,
  MenuOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

class Header extends Component {
  state = {
    visible: false,
    isShowBoxShadow: false,
    // isShowHeader: true,
  }

  // lastScrollTop = 0;

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTop >= 70) {
      this.setState({ isShowBoxShadow: true });
    } else {
      this.setState({ isShowBoxShadow: false });
    }

    // if (scrollTop > this.lastScrollTop) {
    //   this.setState({
    //     isShowHeader: false,
    //   });
    // } else {
    //   this.setState({
    //     isShowHeader: true,
    //   });
    // }

    // this.lastScrollTop = scrollTop;
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  hideDrawer = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { router, companyInfo = {} } = this.props;
    const { pathname } = router;
    const path = (pathname || '').split('/')[1];

    return (
      <Layout.Header className={cn('header', { shadow: this.state.isShowBoxShadow })}>
        <Drawer
          title="S-Home"
          placement="right"
          closable={true}
          maskClosable={true}
          onClose={this.hideDrawer}
          visible={this.state.visible}
          width={300}
        >
          <Menu
            selectedKeys={[router.asPath]}
            defaultOpenKeys={path === 'thiet-ke-noi-that' ? [`/${path}`] : []}
            className="navbar"
            mode="inline"
            onSelect={() => this.hideDrawer()}
          >
            {routes.map((route) => {
              if (route.children && route.children.length) {
                return (
                  <SubMenu
                    key={route.path}
                    title={route.title}
                  >
                    {route.children.map(child => (
                      <Menu.Item key={child.path}>
                        <Link href={child.path}>
                          <a>{child.title}</a>
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                )
              }

              return (
                <Menu.Item key={route.path}>
                  <Link href={route.path}>
                    <a>{route.title}</a>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Drawer>
        <div className="logo">
          <a href="/">
            <img src={companyInfo.logo ? getImageUrl(companyInfo.logo.url) : "/images/logo.png"} />
          </a>
        </div>
        <Menu selectedKeys={[`/${path}`]} className="navbar" mode="horizontal">
          {routes.map((route) => {
            if (route.children && route.children.length) {
              return (
                <SubMenu
                  key={route.path}
                  title={
                    <span style={{ position: 'relative', paddingRight: 10 }}>
                      {route.title}
                      <CaretDownOutlined
                        style={{
                          fontSize: 12,
                          position: 'absolute',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          marginLeft: 5,
                        }}
                      />
                    </span>
                  }
                  className={pathname.includes(route.path) && 'submenu-selected'}
                >
                  {route.children.map(child => (
                    <Menu.Item key={child.path}>
                      <Link href={child.path}>
                        <a>{child.title}</a>
                      </Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              )
            }

            return (
              <Menu.Item key={route.path}>
                <Link href={route.path}>
                  <a>{route.title}</a>
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
        <button className="menu-toggle" onClick={this.showDrawer}>
          <MenuOutlined className="menu-toggle__icon" />
        </button>
      </Layout.Header>
    )
  }
};

export default Header;