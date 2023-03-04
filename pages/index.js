import Head from 'next/head';
import styles from '../styles/Home.module.css';
import sdk from '@stackblitz/sdk';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    sdk.embedProjectId('my-project', 'nextjs-tsywpv', {
      forceEmbedLayout: true,
      openFile: 'pages/index.js',
      clickToLoad: true,
      hideExplorer: true,
      hideNavigation: true,
    });
  }, []);

  return <div id="my-project"></div>;
}
