import { useEffect } from 'react'
import classes from './Releases.module.scss'
import { useTranslation } from 'react-i18next'
import { pathnameState } from './States'
import { useRecoilState } from 'recoil'

function Faq() {
  const [t, i18n] = useTranslation()
  /** @type {Object.<string, {title:string, body:string}} */
  const items = i18n.getResource('en', 'translation', 'releases')
  const [, setPathname] = useRecoilState(pathnameState)

  useEffect(() => {
    setPathname('/tishare-docs/releases')
  }, [setPathname])

  function getReleases() {
    const platforms = ['desktop', 'mobile']
    const versions = ['0.3.0', '0.2.0', '0.1.0']
    return versions.map((val) => getRelease(platforms[0], val))
    // return platforms.map((platform) => versions.map((version) => getRelease(platform, version))).flat()
  }

  /**
   * @param {string} ver
   */
  function getRelease(platform, ver) {
    const bullets = items[platform][ver]['bullets'].map((val) => <li>{val}</li>)
    console.log(items[platform][ver]['time'], new Date(items[platform][ver]['time']))
    return (
      <section className={classes.Release}>
        <div className={classes.Title}>
          <span className={classes.Version}>{ver}</span>
          <span className={classes.Date}>{new Date(items[platform][ver]['time']).toLocaleDateString()}</span>
        </div>
        {t(`releases.${platform}.${ver}.head`)}
        <ul>
          {bullets}
        </ul>
      </section>
    )
  }

  return (
    <>
      <div className={classes.Releases}>
        <h2>Desktop</h2>
        {getReleases()}
      </div >
    </>
  )
}

export default Faq