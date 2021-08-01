import classes from './Main.module.scss'

function Main() {
  return (
    <div className={classes.Main}>
      <div className={classes.Heading}>
        <span>Share Files and Folder</span>
        <span>with tiShare</span>
        <img src='/desktop-run.png' alt='desktop-run'></img>
      </div>
    </div>
  )
}

export default Main