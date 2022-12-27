type WindowWithState = Window & {
  state?: {
    projectContext?: string | null;
  }
}

const getWindow = () => {
  if (typeof window !== "undefined") {
    return window as WindowWithState;
  }
}

export const setProjectContext = (slug: string | null) => {
  const _window = getWindow();
  if (!_window) {
    return;
  }

  if (!_window.state) {
    _window.state = {};
  }

  _window.state.projectContext = slug;
}

export const getProjectContext = () => {
  return getWindow()?.state?.projectContext ?? null;
}
