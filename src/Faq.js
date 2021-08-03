import classes from './Faq.module.scss'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function Faq() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation()
  /** @type {Object.<string, {title:string, body:string}} */
  const items = i18n.getResource('en', 'translation', 'faq.items')
  const [show, setShow] = useState(Array(Object.keys(items).length).fill(false))

  /**
   * @param {number} ind
   */
  function toggleShow(ind) {
    setShow((show) => {
      const ret = show.slice()
      ret[ind] = !ret[ind]
      return ret
    })
  }

  function getItems() {
    const ret = []
    console.log('getItem')
    for (let i = 1; i <= Object.keys(items).length; i++) {
      ret.push(
        <div className={classes.Item} key={i}>
          <div className={classes.ItemTitle} onClick={() => { toggleShow(i) }}>
            {t('faq.items.' + i + '.title')}
          </div>
          <div className={classes.ItemBody + (show[i] ? ' ' + classes.Show : '')}>
            <span>
              {t('faq.items.' + i + '.body')}
            </span>
          </div>
        </div>
      )
    }
    return ret
  }

  return (
    <div className={classes.Faq}>
      {getItems()}
    </div>
  )
}

export default Faq