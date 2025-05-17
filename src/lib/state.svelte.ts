let isSideNavOpen = $state(false);

export function getIsSideNavOpen() {
  return isSideNavOpen;
}

export function toggleSideNav() {
  isSideNavOpen =! isSideNavOpen;
}