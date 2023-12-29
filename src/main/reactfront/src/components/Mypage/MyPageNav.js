import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilPencil,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const MyPageNav = [
 
  {
    component: CNavTitle,
    name: '마이페이지',
  },
  {
    component: CNavItem,
    name: '내 정보',
    to: '/',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: '펀딩',
    to: '/',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '미션',
        to: '/',
      },
      {
        component: CNavItem,
        name: '모임',
        to: '/',
      },
    ],
  },
  {
    component: CNavItem,
    name: '봉사 모임 관리',
    to: '/admin/gathering',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '펀딩 관리',
    to: '/admin/punding',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: '공지사항 관리',
    to: '/admin/notice',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '공지사항',
        to: '/admin/notice/notice',
      },
      {
        component: CNavItem,
        name: 'Q&A',
        to: '/admin/notice/qna',
      },
      {
        component: CNavItem,
        name: 'F&A',
        to: '/admin/notice/fna',
      },
    ],
  }
]

export default MyPageNav;
