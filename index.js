{
  const projects = [
    {
      label: 'litkovska',
      description: 'visual identity, art direction',
    },
    {
      label: 'wix whaaat',
      description: 'branding, web, art direction',
    },
    {
      label: 'sayenko kharenko',
      description: 'visual identity, editorial',
    },
    {
      label: 'gallery',
      description: 'web',
    },
    {
      label: 'soviet modernism',
      description: 'editorial',
    },
    {
      label: 'celebrating tigers',
      description: 'editorial',
    },
    {
      label: 'koolban',
      description: 'editorial',
    }
  ];

  function renderProjects() {
    document.querySelector('.projects').innerHTML = projects.map(({label, description}) => {
      // language=HTML
      return `
      <li class="project">
        <button class="button projectLabel">${label}</button>
        <p class="projectDescription">${description}</p>
      </li>
    `;
    }).join('');
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    renderProjects();
  });
}

