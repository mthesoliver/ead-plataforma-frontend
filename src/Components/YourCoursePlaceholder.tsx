'use client'

import styles from 'Ead/Styles/_your-course-placeholder.module.scss';
import InputPlaceholder from './InputPlaceholder';

function YourCoursePlaceholder() {
    return (
        <section className="text-center">
            <div>
                <h1 className={'fw-bolder ' + styles.main_tittle_color}>Crie seu curso online agora</h1>
                <p>Experimente os melhores recursos, comece agora.</p>
            </div>
            <div>
                <InputPlaceholder />
            </div>
        </section>
    )
}

export default YourCoursePlaceholder;