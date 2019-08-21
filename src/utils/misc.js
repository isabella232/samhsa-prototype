import qs from 'qs';

export const convertToSlug = string =>
  string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

export const hashLinkScroll = () => {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
};

export const servicesToObject = array =>
  array.reduce((obj, item) => {
    obj[item['f2']] = { name: item['f1'], values: item['f3'].split('; ') };
    return obj;
  }, {});

export const linkToFacility = ({ frid, longitude, latitude }) => {
  return {
    pathname: `/details/${frid}`,
    search: qs.stringify({ sAddr: `${longitude}, ${latitude}` })
  };
};
