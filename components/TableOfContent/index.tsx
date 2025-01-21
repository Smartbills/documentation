import { Text } from "@smartbills/react";
import styles from "./table-of-contents.module.scss";
export function TableOfContent() {



    return (
        <div className={styles.tableOfContents}>
            <ul className={styles.list}>
                <li className={styles.item}><Text size="xs" weight='medium' >test 1</Text></li>
                <li>
                    <ul>
                        <li className={styles.item}><Text size="xs" weight='medium' className={styles.active} >Disclaimer</Text></li>
                        <li className={styles.item}><Text size="xs" weight='medium' className={styles.active} >test 1</Text></li>
                        <li className={styles.item}><Text size="xs" weight='medium' className={styles.active} >test 1</Text></li>

                    </ul>
                </li>
                <li className={styles.item}><Text size="xs" weight='medium' >test 1</Text></li>
                <li className={styles.item}><Text size="xs" weight='medium' >test 1</Text></li>
            </ul>
        </div>
    );
}