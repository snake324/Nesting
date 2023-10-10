import { CanActivateFn } from '@angular/router';

export const profileGuard: CanActivateFn = (route, state) => {
  const isProfilePage = state.url.startsWith('/user-forms/profile/');
  const isAdminPage = state.url.startsWith('/admin/admin');

  return isProfilePage || isAdminPage;
};
