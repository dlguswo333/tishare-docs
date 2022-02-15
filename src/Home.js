import classes from './styles/Home.module.scss'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { pathnameState } from './States'
import { useRecoilState } from 'recoil'

function Home() {
  // eslint-disable-next-line
  const [t, _] = useTranslation()
  const [desktopImgHover, setDesktopImgHover] = useState(false)
  const [, setPathname] = useRecoilState(pathnameState)

  useEffect(() => {
    setPathname('/tishare-docs/')
  }, [setPathname])

  return (
    <div className={classes.Home}>
      <div className={classes.Heading}>
        <span>{t('home.heading1')}</span>
        <span>{t('home.heading2')}</span>
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
          <span>{t('home.download-now')}</span>
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
          <span className={classes.ItemTitle}>{t('home.grid1Title')}</span>
          <img className={classes.ItemImg} src='/tishare-docs/home-local-network.svg' alt='local-network.svg' />
          <span className={classes.ItemBody}>{t('home.grid1Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Run Cross Platform */}
          <span className={classes.ItemTitle}>{t('home.grid2Title')}</span>
          <img className={classes.ItemImg} src='/tishare-docs/platforms.svg' alt='platforms.svg' />
          <span className={classes.ItemBody}>{t('home.grid2Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Share both Files and Folders */}
          <span className={classes.ItemTitle}>{t('home.grid3Title')}</span>
          <img className={classes.ItemImg} src='/tishare-docs/home-file-folder.svg' alt='file-folder.svg' />
          <span className={classes.ItemBody}>{t('home.grid3Body')}</span>
        </div>
        <div className={classes.GridItem}>
          {/* Multiple Tasks Support */}
          <span className={classes.ItemTitle}>{t('home.grid4Title')}</span>
          <img className={classes.ItemImg} src='/tishare-docs/home-multiple-tasks.svg' alt='multiple-tasks.svg' />
          <span className={classes.ItemBody}>{t('home.grid4Body')}</span>
        </div>
      </div>
    </div>
  )
}

export default Home
