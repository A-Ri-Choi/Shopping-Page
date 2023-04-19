import { useLocation, Link } from 'react-router-dom';

import styles from "./Tab.module.css"
import cx from "clsx"
import React from 'react';

interface TabProps {
  item: {
    name: string,
    pathname: string
  }
  selected: boolean
  number?: number
}


const TabList = [
  { name: '패션', pathname: '/fashion'},
  { name: '액세서리', pathname: '/accessory'},
  { name: '디지털', pathname: '/digital'},
]

function Tab({ item, selected, number }: TabProps) {
  return (
    <li>
      <Link to={item.pathname} className={styles.link}>
        <button
          type="button"
          className={cx(styles.tab, { [styles.selected]: selected })}
        >
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  );
}

export default function Tabs() {
  const { pathname } = useLocation();

  return (
    <ul className={styles.tabList}>
      {TabList.map((tab) => (
        <Tab
          key={tab.name}
          item={tab}
          selected={(pathname === '/' ? '/issue' : pathname) === tab.pathname}
        />
      ))}
    </ul>
  );
}
