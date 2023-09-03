import styles from "./button.module.css"
export function Countbutton({count}: {count: number}){
    return <div className={styles.count_button}>{`${count.toString().padStart(6, '0')}th ON`}</div>
}

export function GoToStoreButton(){
    return <div className={styles.go_to_store_button}>스토어 바로가기</div>
}