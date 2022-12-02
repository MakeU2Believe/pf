import {PageHead, Resume as ResumeMarkup} from '../components';

export default function Resume() {
  return (
    <>
      <PageHead
        title="Resume"
        description=""
      />

      <style>{`:root { --page-bg-color: #111; --page-text-color: #fff;}`}</style>

      <ResumeMarkup />
    </>
  )
}
