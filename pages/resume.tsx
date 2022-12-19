import {PageHead, Resume as ResumeMarkup} from '../components';
import {mainInfo} from '../data';

export default function Resume() {
  return (
    <>
      <PageHead
        title="nick deineko — résumé"
        description={mainInfo.subtitle}
      />

      <style>{`:root { --page-bg-color: #111; --page-text-color: #fff;}`}</style>

      <ResumeMarkup />
    </>
  )
}
