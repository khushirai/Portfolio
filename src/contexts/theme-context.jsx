import React, { useContext, createContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme } from '../theme/dark.theme';
import { lightTheme } from '../theme/light.theme';
import { useLocalStorage } from '../customHooks/useLocalStorage';


const Context = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStore = () => useContext(Context);

export function withProvider(Component) {
  return function WrapperComponent(props) {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
}

export { Context, Provider };

export const useApp = () => {
  const { darkMode, setDarkMode } = useStore();
  return {
    darkMode,
    setDarkMode,
  };
};

export function withThemeProvider(Component) {
  const WrapperComponent = ({ props }) => {
    const { darkMode } = useApp();
    const theme = darkMode ? darkTheme : lightTheme;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  };
  return withProvider(WrapperComponent);
}