import React, { FC } from 'react';

import Mascot404 from './404-mascot.svg';

import { useTextStyles } from '@rescui/typography';

import styles from './404.module.css';

export const NotFoundContent: FC = () => {
    const textCn = useTextStyles();

    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={Mascot404.src} alt="404"/>
            <h1 className={textCn('rs-h1')}>Page not found</h1>
            <p className={textCn('rs-text-2', { hardness: 'hard' })}>
                Please use search or try<br className={styles.lineBreak} /> starting from{' '}
                <a className={textCn('rs-link', { hardness: 'hard', mode: 'rock' })} href="https://kotlinlang.org/">
                    home.
                </a>
            </p>
        </div>
    );
};
