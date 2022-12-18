import {Main, PageHead} from '../components';
import {mainInfo, Project, projects} from '../data';

// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  }
}

export default function Index({projects}: {projects: Project[]}) {
  return (
    <>
      <PageHead
        title="nick deineko"
        description={mainInfo.subtitle}
      />

      <Main projects={projects}/>
    </>
  )
}
