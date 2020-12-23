import React from 'react';
import styles from './styles.module.css';
import vizzes from './vizzes';

const VizItem = ({ vizId, vizProps }) => (
    <a href={`/docs/viz/${vizId}`}>
        <div className={styles.vizItem}>
            <em>
                <img src={`/img/viz/${vizId}.png`} />
            </em>
            <div>
                {vizProps.label}
            </div>
        </div>
    </a>
);

function VizList({ items }): JSX.Element | null {

    return (
        <>
            {Object.entries(vizzes).map(item => {
                if(items) {
                    if(items.indexOf(item[0])===-1) {
                        return '';
                    }
                }
                return <VizItem vizId={item[0]} vizProps={item[1]} />;
            })}
        </>
    );

}

export default VizList;
