import { CanActivateFn } from '@angular/router';

export const profileGuard: CanActivateFn = (route, state) => {
  const isProfilePage = state.url.startsWith('/user-forms/profile/');

  return isProfilePage;
};
