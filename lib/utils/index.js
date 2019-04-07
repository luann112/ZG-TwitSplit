import { SAMPLE_USERS } from 'lib/enums';
export const className = (...rest) => rest.filter(Boolean).join(' ');
export const getAvatar = (id) => {
  const { avatar = null } = SAMPLE_USERS.find(item => item.id === id) || {};
  return avatar;
}