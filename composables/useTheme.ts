export default function useTheme() {
  const userTheme = useCookie("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initTheme = () => {
    if (userTheme.value === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.dataset.theme = "dark";
    }
    if (userTheme.value) {
      document.documentElement.dataset.theme = userTheme.value;
    }
  };
  const toggleTheme = () => {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    userTheme.value = theme;
  };
  return { initTheme, toggleTheme };
}
