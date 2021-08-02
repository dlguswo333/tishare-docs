import classes from './Main.module.scss'

function Main() {
  return (
    <div className={classes.Main}>
      <div className={classes.Heading}>
        <span>Share Files and Folder</span>
        <span>with tiShare.</span>
        <div className={classes.ImgContainer}>
          <img src='/desktop-run.png' className={classes.DesktopSampleImg} alt='desktop-run' />
          <img src='/mobile-run.png' className={classes.MobileSampleImg} alt='mobile-run' />
        </div>
      </div>
      <div className={classes.Grid}>
        <div className={classes.GridItem}>
          <span className={classes.ItemTitle}>Share in Local Network</span>
          <span className={classes.ItemBody}>Open yourself in Wi-Fi routers or Routers. Other devices will be able to see you.</span>
        </div>
        <div className={classes.GridItem}>
          <span className={classes.ItemTitle}>Run Cross Platform</span>
          <span className={classes.ItemBody}>Open yourself in Wi-Fi routers or Routers. Other devices will be able to see you.</span>
        </div>
        <div className={classes.GridItem}>
          <span className={classes.ItemTitle}>Share both Files and Folders</span>
          <span className={classes.ItemBody}>Open yourself in Wi-Fi routers or Routers. Other devices will be able to see you.</span>
        </div>
        <div className={classes.GridItem}>
          <span className={classes.ItemTitle}>Multiple Tasks Support</span>
          <span className={classes.ItemBody}>Open yourself in Wi-Fi routers or Routers. Other devices will be able to see you.</span>
        </div>
      </div>
    </div>
  )
}

export default Main