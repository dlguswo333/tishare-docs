import classes from './Main.module.scss'
import { useTranslation } from 'react-i18next'
import { basename } from './def.json'

function Main() {
  const [t, _] = useTranslation()
  return (
    <div className={classes.Main}>
      <div className={classes.Heading}>
        <span>{t('main.heading1')}</span>
        <span>{t('main.heading2')}</span>
        <div className={classes.ImgContainer}>
          <img src={basename + 'desktop-run.png'} className={classes.DesktopSampleImg} alt='desktop-run' />
          <img src={basename + 'mobile-run.png'} className={classes.MobileSampleImg} alt='mobile-run' />
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