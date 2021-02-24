import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars1.githubusercontent.com/u/48762187?v=4" alt="Sergio Dev"></img>
            <div>
                <strong>Sergio Dev</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 7
                </p>
            </div>
        </div>
    );
}