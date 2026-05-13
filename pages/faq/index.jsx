import classes from './Faq.module.scss';
import {useTranslation} from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq () {
  const [t,] = useTranslation();

  function getItems () {
    const ret = [];
    for (let i = 1; i <= Object.keys(t('faq.items', {returnObjects: true})).length; i++) {
      ret.push(
        <Accordion key={i} className={classes.Item}>
          <AccordionSummary className={classes.ItemTitle}
            expandIcon={<ExpandMoreIcon />}>
            <span className={classes.ItemTitle}>
              {t('faq.items.' + i + '.title')}
            </span>
          </AccordionSummary>
          <AccordionDetails className={classes.ItemBody}>
            <span className={classes.ItemBody}>
              {t('faq.items.' + i + '.body')}
            </span>
          </AccordionDetails>
        </Accordion>
      );
    }
    return ret;
  }

  return (
    <div className={classes.Faq}>
      {getItems()}
    </div>
  );
}

export default Faq;
