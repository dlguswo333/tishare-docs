import classes from './Main.module.scss'
import { useTranslation } from 'react-i18next'
import { basename } from './def.json'
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
          <img src={basename + 'desktop-run.png'} className={classes.DesktopSampleImg} alt='desktop-run'
            onMouseEnter={() => {
              setDesktopImgHover(true)
            }}
            onMouseLeave={() => {
              setDesktopImgHover(false)
            }}
            onTouchStart={() => {
              setDesktopImgHover(true)
            }}
            onTouchEnd={() => {
              setDesktopImgHover(false)
            }}
            onContextMenu={(e) => {
              e.preventDefault()
            }}
          />
          <img src={basename + 'mobile-run.png'} className={classes.MobileSampleImg + ' ' + (desktopImgHover ? classes.Opacity : '')} alt='mobile-run'
            onContextMenu={(e) => {
              e.preventDefault()
            }}
          />
        </div>
        <div className={classes.Download}>
          <span>{t('main.download-now')}</span>
          <div>
            <img src='/tishare-docs/windows.svg' alt='windows' />
            <img src='/tishare-docs/linux.svg' alt='linux' />
            <a href='https://github.com/dlguswo333/tishare-desktop/releases'>Desktop</a>

          </div>
          <div>
            <img src='/tishare-docs/android.svg' alt='android' />
            <a href='https://play.google.com/store/apps/details?id=com.dlguswo333.tishare_mobile'>Android</a>
          </div>
        </div>
      </div>
      <div className={classes.Grid}>
        <div className={classes.GridItem}>
          {/* Share in Local Network */}
          <span className={classes.ItemTitle}>{t('main.grid1Title')}</span>
          <img className={classes.ItemImg} src={basename + 'main-local-network.svg'} alt='platforms.svg' />
          <span className={classes.ItemBody}>{t('main.grid1Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Run Cross Platform */}
          <span className={classes.ItemTitle}>{t('main.grid2Title')}</span>
          <img className={classes.ItemImg} src={basename + 'platforms.svg'} alt='platforms.svg' />
          <span className={classes.ItemBody}>{t('main.grid2Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Share both Files and Folders */}
          <span className={classes.ItemTitle}>{t('main.grid3Title')}</span>
          <span className={classes.ItemBody}>{t('main.grid3Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Multiple Tasks Support */}
          <span className={classes.ItemTitle}>{t('main.grid4Title')}</span>
          <span className={classes.ItemBody}>{t('main.grid4Body')}</span>
        </div>
      </div>
    </div>
  )
}

export default Main