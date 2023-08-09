import React from 'react';
import styles from './style.module.css';

class Advertisement extends React.Component {
    
    render() {
        return (
            <div className={styles.Advertisement}>{this.props.children}</div>
        );
    }
}

export default Advertisement;