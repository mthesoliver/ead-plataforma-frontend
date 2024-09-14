'use client'

import styles from 'Ead/Styles/_navigation.module.scss';

function Navigation() {
    return (
        <nav className={styles.nav_bar}>
            <ul className={'fw-light ' + styles.nav_list}>
                <li><a href="/">Vantagens</a></li>
                <li><a href="/">Integrações</a></li>
                <li><a href="/">Planos</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Ajuda</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;