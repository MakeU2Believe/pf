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

export default function ProjectPage({project}: {project: Project}) {
  const {title, type, year} = project;

  return (
    <>
      <PageHead
        title={title}
        description={`${type} | ${year}`}
      />

      <ProjectPageMarkup {...project}/>
    </>
  )
}
