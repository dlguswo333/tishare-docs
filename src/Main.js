import classes from './Main.module.scss'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function Main() {
  // eslint-disable-next-line
  const [t, _] = useTranslation()
  const [desktopImgHover, setDesktopImgHover] = useState(false)

  return (
    <div className={classes.Main}>
      <div className={classes.Heading}>
        <span>{t('main.heading1')}</span>
        <span>{t('main.heading2')}</span>
        <div className={classes.ImgContainer}>
          <img src='/tishare-docs/desktop-run.png' className={classes.DesktopSampleImg} alt='desktop-run'
            onPointerOver={() => {
              setDesktopImgHover(true)
            }}
            onPointerMove={() => {
              setDesktopImgHover(true)
            }}
            onPointerLeave={() => {
              setDesktopImgHover(false)
            }}
            onContextMenu={(e) => {
              e.preventDefault()
            }}
          />
          <img src='/tishare-docs/mobile-run.png' className={classes.MobileSampleImg + ' ' + (desktopImgHover ? classes.Opacity : '')} alt='mobile-run'
            onContextMenu={(e) => {
              e.preventDefault()
            }}
          />
        </div>
        <div className={classes.Download}>
          <span>{t('main.download-now')}</span>
          <div>
            <div>
              <a href='https://github.com/dlguswo333/tishare-desktop/releases'>Desktop</a>
              <div>
                <img src='/tishare-docs/windows.svg' alt='windows' />
                <img src='/tishare-docs/linux.svg' alt='linux' />
              </div>
            </div>
            <div>
              <a href='https://play.google.com/store/apps/details?id=com.dlguswo333.tishare_mobile'>Android</a>
              <div>
                <img src='/tishare-docs/android.svg' alt='android' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Grid}>
        <div className={classes.GridItem}>
          {/* Share in Local Network */}
          <span className={classes.ItemTitle}>{t('main.grid1Title')}</span>
          <img className={classes.ItemImg} src='/tishare-docs/main-local-network.svg' alt='local-network.svg' />
          <span className={classes.ItemBody}>{t('main.grid1Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Run Cross Platform */}
          <span className={classes.ItemTitle}>{t('main.grid2Title')}</span>
          <img className={classes.ItemImg} src='/tishare-docs/platforms.svg' alt='platforms.svg' />
          <span className={classes.ItemBody}>{t('main.grid2Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Share both Files and Folders */}
          <span className={classes.ItemTitle}>{t('main.grid3Title')}</span>
          <img className={classes.ItemImg} src='/tishare-docs/main-file-folder.svg' alt='file-folder.svg' />
          <span className={classes.ItemBody}>{t('main.grid3Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Multiple Tasks Support */}
          <span className={classes.ItemTitle}>{t('main.grid4Title')}</span>
          <img className={classes.ItemImg} src='/tishare-docs/main-multiple-tasks.svg' alt='multiple-tasks.svg' />
          <span className={classes.ItemBody}>{t('main.grid4Body')}</span>
        </div>
      </div>
    </div>
  )
}

export default Main