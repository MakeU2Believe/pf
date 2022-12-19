import {ProjectPage as ProjectPageMarkup, PageHead} from '../../components';
import {Project, projects} from '../../data';
import {GetStaticPaths, GetStaticProps} from 'next';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: projects.map(({slug}) => ({params: {slug}})),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({params}) => {
  return {
    props: {
      project: projects.find(({slug}) => slug === params?.slug) || {}
    },
  }
}

// https://stackoverflow.com/a/5454303
const getDescription = (fullBrief: string, maxLength = 160) => {
  if (fullBrief.length <= maxLength) return fullBrief;
  return fullBrief.substr(0, fullBrief.lastIndexOf('.', maxLength) + 1);
}

export default function ProjectPage({project}: {project: Project}) {
  const {title, brief} = project;

  return (
    <>
      <PageHead
        title={`nick deineko — ${title}`}
        description={getDescription(brief)}
      />

      <ProjectPageMarkup {...project}/>
    </>
  )
}
